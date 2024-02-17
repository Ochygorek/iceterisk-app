'use client'

import { useCallback, useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { debounce } from '../utils/debounce';

/*
  TODO:
  
  change the namespace -> id
  the id should match with the note and page
*/

type LocalStoragePluginProps = {
  namespace: string;
};

export function LocalStoragePlugin({ namespace }: LocalStoragePluginProps) {
  const [editor] = useLexicalComposerContext();

  const saveContent = useCallback(
    (content: string) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(namespace, content);
        // console.log('content from LocalStoragePlugin', JSON.parse(content))
        // console.log('namespace from LocalStoragePlugin', namespace)
        // console.log('content from LocalStoragePlugin', JSON.stringify(content))
      }    
    },
    [namespace]
  );

  const debouncedSaveContent = debounce(saveContent, 500);

  useEffect(() => {
    return editor.registerUpdateListener(
      ({ editorState, dirtyElements, dirtyLeaves }) => {
        // Don't update if nothing changed
        if (dirtyElements.size === 0 && dirtyLeaves.size === 0) return;
        
        // log
        // console.log('editor dirtyLeaves', editorState)
        // console.log('editor dirtyElements', JSON.parse(editorState))
        // console.log('editor editorState', JSON.stringify(editorState))

        const serializedState = JSON.stringify(editorState);
        debouncedSaveContent(serializedState);
      }
    );
  }, [debouncedSaveContent, editor]);

  return null;
} 