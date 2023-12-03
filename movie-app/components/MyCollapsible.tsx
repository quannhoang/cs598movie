'use-client';
import { useId } from 'react'
import BaseCollapsible, { CollapsibleProps } from 'react-collapsible'

export function MyCollapsible(props: CollapsibleProps) {
  const id = useId()

  return (
    <BaseCollapsible
      {...props}
      contentElementId={`collapsible-content-${id}`}
      triggerElementProps={{
        ...props.triggerElementProps,
        id: `collapsible-trigger-${id}`,
      }}
    />
  )
}