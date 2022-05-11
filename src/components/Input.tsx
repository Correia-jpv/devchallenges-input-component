import React from 'react'
import { BaseTextFieldProps, InputAdornment, TextField } from '@mui/material'

export interface InputProps extends BaseTextFieldProps {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

function Input(props: InputProps) {
  const { label, placeholder, startIcon, endIcon, ...rest } = props
  return (
    <TextField
      variant="outlined"
      label={label || 'Label'}
      placeholder={placeholder || 'Placeholder'}
      InputLabelProps={{ shrink: true }}
      InputProps={{
        startAdornment: <InputAdornment position="start" children={startIcon} />,
        endAdornment: <InputAdornment position="end">{endIcon}</InputAdornment>,
      }}
      {...rest}
    />
  )
}

export default Input
