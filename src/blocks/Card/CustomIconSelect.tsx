/*'use client'

import { FieldLabel, useField, SelectField } from '@payloadcms/ui'
import * as Icons from 'lucide-react'
import React from 'react'

type Option = {
  label: string
  value: string
}

const options: Option[] = [
  { label: 'Home', value: 'Home' },
  { label: 'User', value: 'User' },
  { label: 'Search', value: 'Search' },
  // más iconos
]

const CustomIconSelect: React.FC<any> = ({ path, label }) => {
  const { value, setValue } = useField<string>({ path })
  const SelectedIcon = value ? (Icons[value as keyof typeof Icons] as React.ElementType) : null

  return (
    <div style={{ marginBottom: '1rem' }}>
      <FieldLabel label={label} htmlFor={path} />

      <select
        id={path}
        name={path}
        value={value || ''}
        onChange={(e) => setValue(e.target.value)}
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          marginTop: '0.25rem',
          width: '100%',
        }}
      >
        <option value="">Select icon</option>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      {SelectedIcon && (
        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <strong>Vista previa:</strong>
          <SelectedIcon size={24} />
        </div>
      )}
    </div>
  )
}

export default CustomIconSelect
*/
/*
'use client'
import type { SelectFieldClientComponent } from 'payload'

import { SelectField } from '@payloadcms/ui'
import React from 'react'
const Icons = require('lucide-react')

export const CustomIconSelect: SelectFieldClientComponent = (props) => {
  return (
    <>

      <SelectField {...props} />
      {props.value && (
        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>

          {(() => {
            // Import icons dynamically from lucide-react
            try {
              const SelectedIcon = Icons[props.value as keyof typeof Icons] as
                | React.ElementType
                | undefined
              return SelectedIcon ? <SelectedIcon size={24} /> : null
            } catch {
              return null
            }
          })()}
          <span>{props.value}</span>
        </div>
      )}
    </>
  )
}*/

import type { SelectFieldServerComponent } from 'payload'
import type React from 'react'

import { SelectField, useField } from '@payloadcms/ui'

export const CustomIconSelect: SelectFieldServerComponent = ({
  clientField,
  path,
  schemaPath,
  permissions,
}) => {
  return (
    <>
      {/* <pre>clientField: {JSON.stringify(clientField, null, 2)}</pre>
      <pre>value: {JSON.stringify(path, null, 2)}</pre>
      <pre>schemaPath: {JSON.stringify(schemaPath, null, 2)}</pre>
      <pre>permissions: {JSON.stringify(permissions, null, 2)}</pre> */}
      <SelectField
        field={clientField}
        path={path}
        schemaPath={schemaPath}
        permissions={permissions}
      />
    </>
  )
}
