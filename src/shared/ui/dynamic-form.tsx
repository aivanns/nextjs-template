import { Path, useForm } from 'react-hook-form'
import { Input } from '@heroui/react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@heroui/react'

export interface FormField {
  name: string
  label: string
  type: string
  required?: boolean
  autoComplete?: string
  endContent?: boolean
  className?: string
}

interface DynamicFormFieldsProps<T extends z.ZodType> {
  fields: FormField[]
  schema: T
  onSubmit: (data: z.infer<T>) => void
  children?: React.ReactNode
  className?: string
  submitButton: {
    text: string
    isLoading?: boolean
  }
}

export function DynamicFormFields<T extends z.ZodType>({ 
  fields, 
  schema,
  onSubmit, 
  children,
  className,
  submitButton
}: DynamicFormFieldsProps<T>) {
  const [visibleFields, setVisibleFields] = useState<Record<string, boolean>>({})

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<T>>({
    resolver: zodResolver(schema)
  })

  const toggleVisibility = (fieldName: string) => {
    setVisibleFields(prev => ({
      ...prev,
      [fieldName]: !prev[fieldName]
    }))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      {children}
      <div className="space-y-4">
        {fields.map((field) => (
          <Input
            key={field.name}
            {...register(field.name as Path<T>)}
            type={field.endContent ? (visibleFields[field.name] ? 'text' : 'password') : field.type}
            label={field.label}
            variant="bordered"
            isInvalid={!!errors[field.name]}
            errorMessage={errors[field.name]?.message as string}
            autoComplete={field.autoComplete}
            className={field.className}
            endContent={field.endContent && (
              <button
                type="button"
                onClick={() => toggleVisibility(field.name)}
                className="h-full flex items-center focus:outline-none px-1"
              >
                {visibleFields[field.name] ? (
                  <EyeSlashIcon className="w-5 h-5 text-neutral-400" />
                ) : (
                  <EyeIcon className="w-5 h-5 text-neutral-400" />
                )}
              </button>
            )}
            classNames={{
              label: 'text-neutral-900',
              input: [
                'text-neutral-900',
                'placeholder:text-neutral-500',
                'autofill:bg-white',
                'autofill:text-neutral-900',
                'focus:placeholder:text-transparent'
              ].join(' '),
              errorMessage: 'text-red-500'
            }}
          />
        ))}
      </div>
      <Button
        type="submit"
        color="primary"
        size="lg"
        isLoading={submitButton.isLoading}
        className="w-full bg-black text-white mt-6"
      >
        {submitButton.text}
      </Button>
    </form>
  )
}