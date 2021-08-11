import dynamic from 'next/dynamic'
import React from 'react'
import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor'
import { TuiEditorWithForwardedProps } from './MarkdownEditorWrapper'
import '@toast-ui/editor/dist/toastui-editor.css'
interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void
}
const Editor = dynamic<TuiEditorWithForwardedProps>(() => import('./MarkdownEditorWrapper'), {
  ssr: false,
})

const EditorWithForwardedRef = React.forwardRef<EditorType | undefined, EditorPropsWithHandlers>(
  (props, ref) => <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
)

interface Props extends EditorProps {
  onChange(value: string): void

  valueType?: 'markdown' | 'html'
}

export default function MarkdownEditor(props: Props) {
  const { initialValue, previewStyle, height, initialEditType, useCommandShortcut } = props

  const editorRef = React.useRef<EditorType>()
  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return
    }

    const instance = editorRef.current.getInstance()
    const valueType = props.valueType || 'markdown'

    props.onChange(valueType === 'markdown' ? instance.getMarkdown() : instance.getHTML())
  }, [props, editorRef])

  return (
    <div>
      <EditorWithForwardedRef
        {...props}
        initialValue={initialValue || 'hello react editor world!'}
        previewStyle={previewStyle || 'vertical'}
        height={height || '600px'}
        initialEditType={initialEditType || 'markdown'}
        ref={editorRef}
        onChange={handleChange}
      />
    </div>
  )
}
