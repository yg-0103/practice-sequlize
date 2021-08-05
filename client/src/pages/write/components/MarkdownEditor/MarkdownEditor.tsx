import React from 'react'
import dynamic from 'next/dynamic'
import { EditorProps } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'

const Editor = dynamic<EditorProps>(() => import('@toast-ui/react-editor').then((m) => m.Editor), {
  ssr: false,
})

export default function MarkdownEditor() {
  return <Editor previewStyle="vertical" height="700px" initialEditType="wysiwyg" />
}
