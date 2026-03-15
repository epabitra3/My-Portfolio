import { useState, useRef, useEffect } from 'react'
import './LinkedInPostEditor.css'

const LinkedInPostEditor = () => {
  const [content, setContent] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [showIconPicker, setShowIconPicker] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [isPreviewExpanded, setIsPreviewExpanded] = useState(false)
  const editorRef = useRef(null)
  const emojiPickerRef = useRef(null)
  const iconPickerRef = useRef(null)
  const previewContentRef = useRef(null)

  const popularEmojis = [
    '🚀', '💼', '🎯', '✨', '🔥', '💡', '🌟', '📈', '🎉', '💪',
    '👍', '👏', '🙌', '🎊', '🏆', '⭐', '💯', '🎁', '📊', '🔔',
    '💬', '📝', '🎨', '🔧', '⚡', '🌱', '📚', '🎓', '💻', '🌐',
    '🤝', '🎯', '📌', '🔗', '💎', '🎪', '🏅', '🎭', '🎬', '📸',
    '🎵', '🎤', '🎧', '🎮', '🎲', '🎰', '🎨', '🖼️', '📱', '⌚',
  ]

  const professionalIcons = [
    'ri-checkbox-circle-line', 'ri-star-line', 'ri-heart-line', 'ri-thumb-up-line',
    'ri-lightbulb-line', 'ri-rocket-line', 'ri-trophy-line', 'ri-award-line',
    'ri-medal-line', 'ri-flag-line', 'ri-fire-line', 'ri-flashlight-line',
    'ri-settings-line', 'ri-tools-line', 'ri-wrench-line', 'ri-hammer-line',
    'ri-file-chart-line', 'ri-bar-chart-line', 'ri-line-chart-line', 'ri-pie-chart-line',
    'ri-graph-line', 'ri-stock-line', 'ri-trending-up-line', 'ri-trending-down-line',
    'ri-arrow-up-line', 'ri-arrow-down-line', 'ri-arrow-right-line', 'ri-arrow-left-line',
    'ri-arrow-up-circle-line', 'ri-arrow-down-circle-line', 'ri-check-line', 'ri-close-line',
    'ri-add-line', 'ri-subtract-line', 'ri-information-line', 'ri-question-line',
    'ri-alert-line', 'ri-error-warning-line', 'ri-checkbox-line', 'ri-radio-button-line',
    'ri-bookmark-line', 'ri-bookmark-fill', 'ri-share-line', 'ri-share-forward-line',
    'ri-share-box-line', 'ri-send-plane-line', 'ri-mail-line', 'ri-mail-send-line',
    'ri-phone-line', 'ri-phone-call-line', 'ri-video-line', 'ri-video-chat-line',
    'ri-camera-line', 'ri-image-line', 'ri-gallery-line', 'ri-folder-line',
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        setShowEmojiPicker(false)
      }
      if (iconPickerRef.current && !iconPickerRef.current.contains(event.target)) {
        setShowIconPicker(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    updatePreview()
  }, [content, isPreviewExpanded])

  const insertTextAtCursor = (text) => {
    const textarea = editorRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const currentText = content

    const newText = currentText.substring(0, start) + text + currentText.substring(end)
    setContent(newText)

    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + text.length, start + text.length)
    }, 0)
  }

  const wrapSelectedText = (before, after = '') => {
    const textarea = editorRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = content.substring(start, end)

    if (selectedText) {
      const newText = content.substring(0, start) + before + selectedText + after + content.substring(end)
      setContent(newText)
      setTimeout(() => {
        textarea.focus()
        textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length)
      }, 0)
    } else {
      insertTextAtCursor(before + after)
      setTimeout(() => {
        textarea.focus()
        const newPos = textarea.selectionStart - after.length
        textarea.setSelectionRange(newPos, newPos)
      }, 0)
    }
  }

  const formatBold = () => wrapSelectedText('**', '**')
  const formatItalic = () => wrapSelectedText('*', '*')
  const formatUnderline = () => wrapSelectedText('__', '__')
  const addBulletList = () => insertTextAtCursor('• ')
  const addNumberList = () => insertTextAtCursor('1. ')
  const addHashtag = () => insertTextAtCursor('#')
  const addMention = () => insertTextAtCursor('@')
  const addLink = () => insertTextAtCursor('https://')

  const clearFormatting = () => {
    const textarea = editorRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = content.substring(start, end)
    
    // Remove markdown formatting
    const cleaned = selectedText
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*([^*\n]+?)\*/g, '$1')
      .replace(/__(.*?)__/g, '$1')
    
    const newText = content.substring(0, start) + cleaned + content.substring(end)
    setContent(newText)
    
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start, start + cleaned.length)
    }, 0)
  }

  const toUnicodeBold = (text) => {
    const boldMap = {
      'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇',
      'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏',
      'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗',
      'Y': '𝐘', 'Z': '𝐙',
      'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡',
      'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩',
      'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱',
      'y': '𝐲', 'z': '𝐳',
      '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
    }
    return text.split('').map(char => boldMap[char] || char).join('')
  }

  const toUnicodeItalic = (text) => {
    const italicMap = {
      'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻',
      'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃',
      'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋',
      'Y': '𝑌', 'Z': '𝑍',
      'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ',
      'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝',
      'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥',
      'y': '𝑦', 'z': '𝑧'
    }
    return text.split('').map(char => italicMap[char] || char).join('')
  }

  const convertToLinkedInFormat = (text) => {
    // Convert bold (**text**)
    text = text.replace(/\*\*(.*?)\*\*/g, (match, content) => {
      return toUnicodeBold(content)
    })
    
    // Convert italic (*text*) - only if not part of bold
    text = text.replace(/\*([^*\n]+?)\*/g, (match, content) => {
      if (!match.includes('**')) {
        return toUnicodeItalic(content)
      }
      return match
    })
    
    // Remove underline markers
    text = text.replace(/__(.*?)__/g, '$1')
    
    return text
  }

  const updatePreview = () => {
    if (!previewContentRef.current) return

    let text = content
    const hasContent = text.trim().length > 0
    
    if (!hasContent) {
      previewContentRef.current.innerHTML = '<p class="preview-placeholder">Start writing and your post will appear here...</p>'
      return
    }
    
    // Convert markdown to HTML for preview
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    text = text.replace(/\*([^*\n]+?)\*/g, (match, content) => {
      if (!match.includes('**')) {
        return '<em>' + content + '</em>'
      }
      return match
    })
    text = text.replace(/__(.*?)__/g, '<u>$1</u>')
    
    // Handle lists
    const lines = text.split('\n')
    let processedLines = []
    let inList = false
    let listItems = []
    
    lines.forEach((line) => {
      const isBlank = line.trim() === ''
      const isBullet = /^[-•]\s+(.+)$/.test(line.trim())
      const isNumbered = /^\d+\.\s+(.+)$/.test(line.trim())
      
      if (isBullet) {
        if (!inList) {
          inList = true
          listItems = []
        }
        listItems.push(line.replace(/^[-•]\s+(.+)$/, '<li>$1</li>'))
      } else if (isNumbered) {
        if (!inList) {
          inList = true
          listItems = []
        }
        listItems.push(line.replace(/^\d+\.\s+(.+)$/, '<li>$1</li>'))
      } else {
        if (inList && listItems.length > 0) {
          processedLines.push('<ul style="margin: 8px 0; padding-left: 20px;">' + listItems.join('') + '</ul>')
          listItems = []
          inList = false
        }
        
        if (isBlank) {
          processedLines.push('<br>')
        } else {
          processedLines.push(line)
        }
      }
    })
    
    if (inList && listItems.length > 0) {
      processedLines.push('<ul style="margin: 8px 0; padding-left: 20px;">' + listItems.join('') + '</ul>')
    }
    
    text = processedLines.join('<br>')
    
    // Convert hashtags
    text = text.replace(/#(\w+)/g, '<span style="color: #0077b5; font-weight: 600;">#$1</span>')
    
    // Convert mentions
    text = text.replace(/@(\w+)/g, '<span style="color: #0077b5; font-weight: 600;">@$1</span>')
    
    // Convert links
    text = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" style="color: #0077b5; text-decoration: none;">$1</a>')
    
    previewContentRef.current.innerHTML = text
    
    // Update preview expanded state
    if (previewContentRef.current) {
      if (isPreviewExpanded) {
        previewContentRef.current.classList.add('expanded')
        previewContentRef.current.classList.remove('collapsed')
      } else {
        previewContentRef.current.classList.remove('expanded')
      }
    }
  }

  const copyToClipboard = async () => {
    try {
      const formattedText = convertToLinkedInFormat(content)
      await navigator.clipboard.writeText(formattedText)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const clearContent = () => {
    setContent('')
    if (editorRef.current) {
      editorRef.current.focus()
    }
  }

  const charCount = content.length
  const charCounterClass = charCount > 2500 ? 'danger' : charCount > 2000 ? 'warning' : ''
  const showMoreNeeded = content.length > 100

  return (
    <section className="post-editor-container pt-100 pb-100 bg-albastor">
      <div className="container">
        <div className="section-title style1 text-center mb-40">
          <span>Professional Post Creator</span>
          <h2>Create Formatted LinkedIn Posts</h2>
          <p>Format your LinkedIn posts with bold, italic, emojis, icons, and more!</p>
        </div>

        <div className="row gx-4">
          {/* Editor Column */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="editor-wrapper">
              <div className="toolbar">
                <div className="toolbar-group">
                  <button className="toolbar-btn" onClick={formatBold} title="Bold (Ctrl+B)">
                    <i className="ri-bold"></i>
                  </button>
                  <button className="toolbar-btn" onClick={formatItalic} title="Italic (Ctrl+I)">
                    <i className="ri-italic"></i>
                  </button>
                  <button className="toolbar-btn" onClick={formatUnderline} title="Underline (Ctrl+U)">
                    <i className="ri-underline"></i>
                  </button>
                </div>
                <div className="toolbar-group">
                  <button className="toolbar-btn" onClick={addBulletList} title="Bullet List">
                    <i className="ri-list-unordered"></i>
                  </button>
                  <button className="toolbar-btn" onClick={addNumberList} title="Numbered List">
                    <i className="ri-list-ordered"></i>
                  </button>
                </div>
                <div className="toolbar-group emoji-picker-container" ref={emojiPickerRef}>
                  <button
                    className="toolbar-btn"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    title="Insert Emoji"
                  >
                    <i className="ri-emotion-line"></i>
                  </button>
                  {showEmojiPicker && (
                    <div className="emoji-picker show">
                      <div className="emoji-grid">
                        {popularEmojis.map((emoji, idx) => (
                          <div
                            key={idx}
                            className="emoji-item"
                            onClick={() => {
                              insertTextAtCursor(emoji)
                              setShowEmojiPicker(false)
                            }}
                          >
                            {emoji}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="toolbar-group icon-picker-container" ref={iconPickerRef}>
                  <button
                    className="toolbar-btn"
                    onClick={() => setShowIconPicker(!showIconPicker)}
                    title="Insert Icon"
                  >
                    <i className="ri-star-line"></i>
                  </button>
                  {showIconPicker && (
                    <div className="icon-picker show">
                      <div className="icon-grid">
                        {professionalIcons.map((iconClass, idx) => (
                          <div
                            key={idx}
                            className="icon-item"
                            onClick={() => {
                              insertTextAtCursor(`<i class="${iconClass}"></i> `)
                              setShowIconPicker(false)
                            }}
                            title={iconClass}
                          >
                            <i className={iconClass}></i>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="toolbar-group">
                  <button className="toolbar-btn" onClick={addLink} title="Insert Link">
                    <i className="ri-links-line"></i>
                  </button>
                  <button className="toolbar-btn" onClick={addMention} title="Mention (@)">
                    <i className="ri-at-line"></i>
                  </button>
                  <button className="toolbar-btn" onClick={addHashtag} title="Hashtag (#)">
                    <i className="ri-hashtag"></i>
                  </button>
                </div>
                <div className="toolbar-group">
                  <button className="toolbar-btn" onClick={clearFormatting} title="Clear Formatting">
                    <i className="ri-format-clear"></i>
                  </button>
                </div>
              </div>
              
              <textarea
                ref={editorRef}
                className="editor-textarea"
                placeholder="Start writing your LinkedIn post here... You can use formatting options from the toolbar above."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              
              <div className={`char-counter ${charCounterClass}`}>
                <span>{charCount}</span> / 3,000 characters
              </div>
            </div>

            <div className="action-buttons mt-3">
              <button className="btn-copy" onClick={copyToClipboard}>
                <i className="ri-file-copy-line"></i> Copy Formatted Text
              </button>
              <button className="btn-clear" onClick={clearContent}>
                <i className="ri-delete-bin-line"></i> Clear All
              </button>
            </div>

            <div className="format-help mt-4">
              <h4><i className="ri-information-line"></i> Formatting Guide</h4>
              <ul>
                <li><strong>Bold:</strong> Select text and click <strong>B</strong> or use <code>**text**</code> - Will be converted to Unicode bold for LinkedIn</li>
                <li><strong>Italic:</strong> Select text and click <em>I</em> or use <code>*text*</code> - Will be converted to Unicode italic for LinkedIn</li>
                <li><strong>Emojis:</strong> Click the emoji button to insert emojis directly</li>
                <li><strong>Icons:</strong> Click the icon button to insert professional RemixIcon icons</li>
                <li><strong>Hashtags:</strong> Click # button or type <code>#hashtag</code> directly</li>
                <li><strong>Mentions:</strong> Click @ button or type <code>@username</code> directly</li>
                <li><strong>Lists:</strong> Use bullet (•) or numbered (1.) lists for better formatting</li>
                <li><strong>Line Break:</strong> Press Enter for new lines</li>
                <li><strong>Character Limit:</strong> LinkedIn allows up to 3,000 characters</li>
                <li><strong>Copy:</strong> Click "Copy Formatted Text" to get LinkedIn-ready text with Unicode formatting</li>
              </ul>
            </div>
          </div>

          {/* Preview Column */}
          <div className="col-lg-6 col-md-12">
            <div className="preview-section">
              <h3 className="preview-title mb-3">Post Preview</h3>
              <div className="linkedin-preview-card">
                <div className="linkedin-post-header">
                  <div className="linkedin-profile">
                    <div className="linkedin-avatar">
                      <i className="ri-user-line"></i>
                    </div>
                    <div className="linkedin-profile-info">
                      <div className="linkedin-name">Your Name</div>
                      <div className="linkedin-title">Your Professional Title</div>
                      <div className="linkedin-time">
                        <span>12h</span>
                        <span className="linkedin-dot">•</span>
                        <i className="ri-global-line"></i>
                      </div>
                    </div>
                  </div>
                  <div className="linkedin-more-options">
                    <i className="ri-more-fill"></i>
                  </div>
                </div>
                <div className="linkedin-post-content">
                  <div 
                    ref={previewContentRef}
                    className={`preview-content ${isPreviewExpanded ? 'expanded' : ''}`}
                  >
                    <p className="preview-placeholder">Start writing and your post will appear here...</p>
                  </div>
                  {showMoreNeeded && (
                    <div 
                      className="linkedin-show-more" 
                      onClick={() => setIsPreviewExpanded(!isPreviewExpanded)}
                    >
                      <span>{isPreviewExpanded ? '...less' : '...more'}</span>
                    </div>
                  )}
                </div>
                <div className="linkedin-post-footer">
                  <div className="linkedin-engagement">
                    <div className="linkedin-reactions">
                      <span className="linkedin-reaction-icon">👍</span>
                      <span className="linkedin-reaction-count">0</span>
                    </div>
                    <div className="linkedin-comments-shares">
                      <span>0 comments</span>
                      <span className="linkedin-separator">•</span>
                      <span>0 reposts</span>
                    </div>
                  </div>
                  <div className="linkedin-actions">
                    <button className="linkedin-action-btn">
                      <i className="ri-thumb-up-line"></i>
                      <span>Like</span>
                    </button>
                    <button className="linkedin-action-btn">
                      <i className="ri-chat-3-line"></i>
                      <span>Comment</span>
                    </button>
                    <button className="linkedin-action-btn">
                      <i className="ri-share-forward-line"></i>
                      <span>Repost</span>
                    </button>
                    <button className="linkedin-action-btn">
                      <i className="ri-send-plane-line"></i>
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast show">
          <i className="ri-check-line"></i> Copied to clipboard!
        </div>
      )}
    </section>
  )
}

export default LinkedInPostEditor
