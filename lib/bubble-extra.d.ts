import { Editor } from '@tiptap/react';
import { JSX } from 'react/jsx-runtime';

export declare function BubbleMenuDrawer(props: IPropsBubbleMenu_2): JSX.Element;

export declare function BubbleMenuExcalidraw({ editor }: any): JSX.Element;

export declare function BubbleMenuKatex({ editor, ...props }: any): JSX.Element;

export declare function BubbleMenuMermaid(props: IPropsBubbleMenu): JSX.Element;

export declare function BubbleMenuTwitter({ editor, disabled }: BubbleMenuTwitterProps): JSX.Element;

export declare interface BubbleMenuTwitterProps {
    editor: Editor;
    disabled?: boolean;
}

declare interface IPropsBubbleMenu {
    editor: Editor;
    disabled?: boolean;
}

declare interface IPropsBubbleMenu_2 {
    editor: Editor;
    disabled?: boolean;
}

export { }


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        attachment: {
            setAttachment: (attrs?: unknown) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        setCodeBlock: {
            setCodeBlock: (options?: any) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        emoji: {
            setEmoji: (emoji: {
                name: string;
                emoji: string;
            }) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        excalidraw: {
            setExcalidraw: (attrs?: IExcalidrawAttrs) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontSize: {
            /**
             * Set the text font size. ex: "12px", "2em", or "small". Must be a valid
             * CSS font-size
             * (https://developer.mozilla.org/en-US/docs/Web/CSS/font-size).
             */
            setFontSize: (fontSize: string) => ReturnType;
            /**
             * Unset the font size
             */
            unsetFontSize: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        painter: {
            setPainter: (marks: Mark[]) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        drawer: {
            setDrawer: (options: any, replace?: any) => ReturnType;
            setAlignImageDrawer: (align: 'left' | 'center' | 'right') => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        imageUpload: {
            /**
             * Add an image
             */
            setImageInline: (options: Partial<SetImageAttrsOptions>) => ReturnType;
            /**
             * Update an image
             */
            updateImage: (options: Partial<SetImageAttrsOptions>) => ReturnType;
            /**
             * Set image alignment
             */
            setAlignImage: (align: 'left' | 'center' | 'right') => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        codeView: {
            /**
                   * Toggle code view mode
                   */
            toggleCodeView: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        exportWord: {
            exportToWord: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        indent: {
            /**
             * Set the indent attribute
             */
            indent: () => ReturnType;
            /**
             * Set the outdent attribute
             */
            outdent: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        lineHeight: {
            setLineHeight: (lineHeight: string) => ReturnType;
            unsetLineHeight: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        iframe: {
            /**
             * Add an iframe
             */
            setIframe: (options: {
                src: string;
                service: string;
            }) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        imageGifUpload: {
            /**
             * Add an image gif
             */
            setImageGif: (options: Partial<SetImageAttrsOptions>) => ReturnType;
            /**
             * Update an image gif
             */
            updateImageGif: (options: Partial<SetImageAttrsOptions>) => ReturnType;
            /**
             * Set image alignment
             */
            setAlignImageGif: (align: 'left' | 'center' | 'right') => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        search: {
            setSearchTerm: (searchTerm: string) => ReturnType;
            setReplaceTerm: (replaceTerm: string) => ReturnType;
            replace: () => ReturnType;
            replaceAll: () => ReturnType;
            goToPrevSearchResult: () => void;
            goToNextSearchResult: () => void;
            setCaseSensitive: (caseSensitive: boolean) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        katex: {
            setKatex: (arg?: IKatexAttrs) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        tableOfContents: {
            setTableOfContents: () => ReturnType;
            removeTableOfContents: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        mermaid: {
            setMermaid: (options: any, replace?: any) => ReturnType;
            setAlignImageMermaid: (align: 'left' | 'center' | 'right') => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        columns: {
            insertColumns: (attrs?: {
                cols: number;
            }) => ReturnType;
            addColBefore: () => ReturnType;
            addColAfter: () => ReturnType;
            deleteCol: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        video: {
            /**
             * Add an video
             */
            setVideo: (options: Partial<SetVideoOptions>) => ReturnType;
            /**
             * Update an video
             */
            updateVideo: (options: Partial<SetVideoOptions>) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        twitter: {
            /**
             * Insert a tweet
             * @param options The tweet attributes
             * @example editor.commands.setTweet({ src: 'https://x.com/seanpk/status/1800145949580517852' })
             */
            setTweet: (options: SetTweetOptions) => ReturnType;
            updateTweet: (options: SetTweetOptions) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        tableCellBackground: {
            setTableCellBackground: (color: string) => ReturnType;
            unsetTableCellBackground: () => ReturnType;
        };
    }
}
