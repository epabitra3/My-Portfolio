// LinkedIn Post Editor JavaScript

// Popular emojis for LinkedIn posts
const popularEmojis = [
  '🚀', '💼', '🎯', '✨', '🔥', '💡', '🌟', '📈', '🎉', '💪',
  '👍', '👏', '🙌', '🎊', '🏆', '⭐', '💯', '🎁', '📊', '🔔',
  '💬', '📝', '🎨', '🔧', '⚡', '🌱', '📚', '🎓', '💻', '🌐',
  '🤝', '🎯', '📌', '🔗', '💎', '🎪', '🏅', '🎭', '🎬', '📸',
  '🎵', '🎤', '🎧', '🎮', '🎲', '🎰', '🎨', '🖼️', '📱', '⌚',
  '💼', '📦', '📮', '📧', '📞', '📠', '📺', '📻', '🎙️', '📹',
  '🎞️', '🎟️', '🎫', '🎪', '🎭', '🎨', '🖌️', '🖍️', '✏️', '✒️',
  '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📊', '📋', '📌',
  '📍', '📎', '🖇️', '📏', '📐', '✂️', '🗃️', '🗄️', '🗂️', '📁',
  '📂', '🗂️', '🗳️', '🗄️', '📊', '📈', '📉', '📊', '📋', '📌'
];

// Professional icons (using RemixIcon classes)
const professionalIcons = [
  'ri-checkbox-circle-line', 'ri-star-line', 'ri-heart-line', 'ri-thumb-up-line',
  'ri-lightbulb-line', 'ri-rocket-line', 'ri-trophy-line', 'ri-award-line',
  'ri-medal-line', 'ri-flag-line', 'ri-fire-line', 'ri-flashlight-line',
  'ri-settings-line', 'ri-tools-line', 'ri-wrench-line', 'ri-hammer-line',
  'ri-file-chart-line', 'ri-bar-chart-line', 'ri-line-chart-line', 'ri-pie-chart-line',
  'ri-graph-line', 'ri-stock-line', 'ri-trending-up-line', 'ri-trending-down-line',
  'ri-arrow-up-line', 'ri-arrow-down-line', 'ri-arrow-right-line', 'ri-arrow-left-line',
  'ri-arrow-up-circle-line', 'ri-arrow-down-circle-line', 'ri-check-line', 'ri-close-line',
  'ri-add-line', 'ri-subtract-line', 'ri-multiply-line', 'ri-divide-line',
  'ri-information-line', 'ri-question-line', 'ri-alert-line', 'ri-error-warning-line',
  'ri-checkbox-line', 'ri-radio-button-line', 'ri-bookmark-line', 'ri-bookmark-fill',
  'ri-share-line', 'ri-share-forward-line', 'ri-share-box-line', 'ri-send-plane-line',
  'ri-mail-line', 'ri-mail-send-line', 'ri-mail-open-line', 'ri-mail-unread-line',
  'ri-phone-line', 'ri-phone-call-line', 'ri-video-line', 'ri-video-chat-line',
  'ri-camera-line', 'ri-image-line', 'ri-gallery-line', 'ri-folder-line',
  'ri-folder-open-line', 'ri-file-line', 'ri-file-text-line', 'ri-file-list-line',
  'ri-download-line', 'ri-upload-line', 'ri-save-line', 'ri-save-2-line',
  'ri-edit-line', 'ri-edit-2-line', 'ri-delete-bin-line', 'ri-delete-bin-2-line',
  'ri-search-line', 'ri-search-2-line', 'ri-eye-line', 'ri-eye-off-line',
  'ri-lock-line', 'ri-lock-unlock-line', 'ri-shield-line', 'ri-shield-check-line',
  'ri-user-line', 'ri-user-add-line', 'ri-team-line', 'ri-group-line',
  'ri-community-line', 'ri-customer-service-line', 'ri-customer-service-2-line',
  'ri-calendar-line', 'ri-calendar-check-line', 'ri-time-line', 'ri-timer-line',
  'ri-alarm-line', 'ri-notification-line', 'ri-notification-2-line', 'ri-notification-3-line',
  'ri-notification-4-line', 'ri-bell-line', 'ri-bell-fill', 'ri-message-line',
  'ri-message-2-line', 'ri-message-3-line', 'ri-chat-line', 'ri-chat-1-line',
  'ri-chat-2-line', 'ri-chat-3-line', 'ri-chat-4-line', 'ri-discuss-line',
  'ri-question-answer-line', 'ri-feedback-line', 'ri-questionnaire-line',
  'ri-survey-line', 'ri-file-list-3-line', 'ri-file-list-2-line', 'ri-file-paper-line',
  'ri-file-paper-2-line', 'ri-file-edit-line', 'ri-file-add-line', 'ri-file-reduce-line',
  'ri-file-settings-line', 'ri-file-shield-line', 'ri-file-warning-line', 'ri-file-info-line',
  'ri-file-code-line', 'ri-file-music-line', 'ri-file-video-line', 'ri-file-image-line',
  'ri-file-zip-line', 'ri-file-pdf-line', 'ri-file-excel-line', 'ri-file-word-line',
  'ri-file-ppt-line', 'ri-file-unknow-line', 'ri-file-download-line', 'ri-file-upload-line',
  'ri-file-copy-line', 'ri-file-shred-line', 'ri-file-transfer-line', 'ri-file-search-line',
  'ri-file-lock-line', 'ri-file-unlock-line', 'ri-file-forbid-line', 'ri-file-check-line',
  'ri-file-close-line', 'ri-file-line', 'ri-folder-line', 'ri-folder-open-line',
  'ri-folder-add-line', 'ri-folder-reduce-line', 'ri-folder-settings-line', 'ri-folder-shield-line',
  'ri-folder-warning-line', 'ri-folder-info-line', 'ri-folder-download-line', 'ri-folder-upload-line',
  'ri-folder-transfer-line', 'ri-folder-search-line', 'ri-folder-lock-line', 'ri-folder-unlock-line',
  'ri-folder-forbid-line', 'ri-folder-check-line', 'ri-folder-close-line', 'ri-folder-chart-line',
  'ri-folder-chart-2-line', 'ri-folder-user-line', 'ri-folder-shared-line', 'ri-folder-received-line',
  'ri-folder-settings-line', 'ri-folder-settings-2-line', 'ri-folder-settings-3-line', 'ri-folder-settings-4-line',
  'ri-folder-settings-5-line', 'ri-folder-settings-6-line', 'ri-folder-settings-7-line', 'ri-folder-settings-8-line',
  'ri-folder-settings-9-line', 'ri-folder-settings-10-line', 'ri-folder-settings-11-line', 'ri-folder-settings-12-line',
  'ri-folder-settings-13-line', 'ri-folder-settings-14-line', 'ri-folder-settings-15-line', 'ri-folder-settings-16-line',
  'ri-folder-settings-17-line', 'ri-folder-settings-18-line', 'ri-folder-settings-19-line', 'ri-folder-settings-20-line'
];

let isBold = false;
let isItalic = false;
let isUnderline = false;

document.addEventListener('DOMContentLoaded', function() {
  const editor = document.getElementById('postEditor');
  const charCounter = document.getElementById('charCounter');
  const charCount = document.getElementById('charCount');
  const previewContent = document.getElementById('previewContent');
  const btnBold = document.getElementById('btnBold');
  const btnItalic = document.getElementById('btnItalic');
  const btnUnderline = document.getElementById('btnUnderline');
  const btnBulletList = document.getElementById('btnBulletList');
  const btnNumberList = document.getElementById('btnNumberList');
  const btnEmoji = document.getElementById('btnEmoji');
  const btnIcon = document.getElementById('btnIcon');
  const btnLink = document.getElementById('btnLink');
  const btnMention = document.getElementById('btnMention');
  const btnHashtag = document.getElementById('btnHashtag');
  const btnClearFormat = document.getElementById('btnClearFormat');
  const btnCopy = document.getElementById('btnCopy');
  const btnClear = document.getElementById('btnClear');
  const emojiPicker = document.getElementById('emojiPicker');
  const iconPicker = document.getElementById('iconPicker');
  const toast = document.getElementById('toast');
  const showMoreBtn = document.getElementById('showMoreBtn');

  // Initialize emoji picker
  function initEmojiPicker() {
    const emojiGrid = document.createElement('div');
    emojiGrid.className = 'emoji-grid';
    
    popularEmojis.forEach(emoji => {
      const emojiItem = document.createElement('div');
      emojiItem.className = 'emoji-item';
      emojiItem.textContent = emoji;
      emojiItem.addEventListener('click', () => {
        insertTextAtCursor(editor, emoji);
        emojiPicker.classList.remove('show');
      });
      emojiGrid.appendChild(emojiItem);
    });
    
    emojiPicker.appendChild(emojiGrid);
  }

  // Initialize icon picker
  function initIconPicker() {
    const iconGrid = document.createElement('div');
    iconGrid.className = 'icon-grid';
    
    professionalIcons.forEach(iconClass => {
      const iconItem = document.createElement('div');
      iconItem.className = 'icon-item';
      iconItem.innerHTML = `<i class="${iconClass}"></i>`;
      iconItem.addEventListener('click', () => {
        insertTextAtCursor(editor, `<i class="${iconClass}"></i> `);
        iconPicker.classList.remove('show');
      });
      iconItem.title = iconClass;
      iconGrid.appendChild(iconItem);
    });
    
    iconPicker.appendChild(iconGrid);
  }

  // Insert text at cursor position
  function insertTextAtCursor(textarea, text) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentText = textarea.value;
    
    textarea.value = currentText.substring(0, start) + text + currentText.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + text.length;
    textarea.focus();
    
    updateCharCount();
    updatePreview();
  }

  // Wrap selected text with formatting
  function wrapSelectedText(before, after = '') {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selectedText = editor.value.substring(start, end);
    
    if (selectedText) {
      editor.value = editor.value.substring(0, start) + before + selectedText + after + editor.value.substring(end);
      editor.selectionStart = start + before.length;
      editor.selectionEnd = start + before.length + selectedText.length;
    } else {
      insertTextAtCursor(editor, before + after);
      editor.selectionStart = editor.selectionEnd = editor.selectionStart - after.length;
    }
    
    editor.focus();
    updateCharCount();
    updatePreview();
  }

  // Update character count
  function updateCharCount() {
    const count = editor.value.length;
    charCount.textContent = count;
    
    charCounter.classList.remove('warning', 'danger');
    if (count > 2500) {
      charCounter.classList.add('danger');
    } else if (count > 2000) {
      charCounter.classList.add('warning');
    }
  }

  // Convert text to Unicode bold
  function toUnicodeBold(text) {
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
    };
    return text.split('').map(char => boldMap[char] || char).join('');
  }

  // Convert text to Unicode italic
  function toUnicodeItalic(text) {
    const italicMap = {
      'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻',
      'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃',
      'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋',
      'Y': '𝑌', 'Z': '𝑍',
      'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ',
      'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝',
      'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥',
      'y': '𝑦', 'z': '𝑧'
    };
    return text.split('').map(char => italicMap[char] || char).join('');
  }

  // Convert markdown to LinkedIn-compatible format
  function convertToLinkedInFormat(text) {
    // First, convert bold (**text**) - this takes priority
    text = text.replace(/\*\*(.*?)\*\*/g, (match, content) => {
      return toUnicodeBold(content);
    });
    
    // Then convert italic (*text*) - only if not already part of bold
    // Use a simpler approach: match single * that aren't followed or preceded by *
    text = text.replace(/\*([^*\n]+?)\*/g, (match, content) => {
      // Check if this is not part of a bold marker
      if (!match.includes('**')) {
        return toUnicodeItalic(content);
      }
      return match;
    });
    
    // Remove underline markers for LinkedIn (LinkedIn doesn't support underline)
    text = text.replace(/__(.*?)__/g, '$1');
    
    return text;
  }

  // Update preview
  function updatePreview() {
    let text = editor.value;
    const hasContent = text.trim().length > 0;
    
    if (!hasContent) {
      previewContent.innerHTML = '<p class="preview-placeholder">Start writing and your post will appear here...</p>';
      showMoreBtn.style.display = 'none';
      previewContent.classList.remove('expanded');
      return;
    }
    
    // Convert markdown-style formatting to HTML for preview
    // First handle bold (**text**)
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Then handle italic (*text*) - only if not part of bold
    text = text.replace(/\*([^*\n]+?)\*/g, (match, content) => {
      if (!match.includes('**')) {
        return '<em>' + content + '</em>';
      }
      return match;
    });
    text = text.replace(/__(.*?)__/g, '<u>$1</u>');
    
    // Convert line breaks - preserve blank lines
    // First, preserve multiple line breaks by converting \n\n to a special marker
    text = text.replace(/\n\n+/g, '\n\n');
    
    // Convert single line breaks to <br>, but preserve double line breaks as <br><br>
    const lines = text.split('\n');
    let processedLines = [];
    let inList = false;
    let listItems = [];
    
    lines.forEach((line, index) => {
      const isBlank = line.trim() === '';
      const isBullet = /^[-•]\s+(.+)$/.test(line.trim());
      const isNumbered = /^\d+\.\s+(.+)$/.test(line.trim());
      
      if (isBullet) {
        if (!inList) {
          inList = true;
          listItems = [];
        }
        listItems.push(line.replace(/^[-•]\s+(.+)$/, '<li>$1</li>'));
      } else if (isNumbered) {
        if (!inList) {
          inList = true;
          listItems = [];
        }
        listItems.push(line.replace(/^\d+\.\s+(.+)$/, '<li>$1</li>'));
      } else {
        // Close list if we were in one
        if (inList && listItems.length > 0) {
          processedLines.push('<ul style="margin: 8px 0; padding-left: 20px;">' + listItems.join('') + '</ul>');
          listItems = [];
          inList = false;
        }
        
        // Preserve blank lines
        if (isBlank) {
          processedLines.push('<br>');
        } else {
          processedLines.push(line);
        }
      }
    });
    
    // Close any remaining list
    if (inList && listItems.length > 0) {
      processedLines.push('<ul style="margin: 8px 0; padding-left: 20px;">' + listItems.join('') + '</ul>');
    }
    
    // Join with <br> to preserve line breaks
    text = processedLines.join('<br>');
    
    // Convert hashtags
    text = text.replace(/#(\w+)/g, '<span style="color: #0077b5; font-weight: 600;">#$1</span>');
    
    // Convert mentions
    text = text.replace(/@(\w+)/g, '<span style="color: #0077b5; font-weight: 600;">@$1</span>');
    
    // Convert links (simple URL detection)
    text = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" style="color: #0077b5; text-decoration: none;">$1</a>');
    
    previewContent.innerHTML = text;
    
    // Check if content needs "show more" button
    setTimeout(() => {
      checkShowMore();
    }, 100);
  }
  
  // Check if show more button is needed
  function checkShowMore() {
    // Temporarily expand to measure full height
    const wasExpanded = previewContent.classList.contains('expanded');
    previewContent.classList.remove('expanded', 'collapsed');
    
    // Force reflow to get accurate height
    void previewContent.offsetHeight;
    
    const contentHeight = previewContent.scrollHeight;
    // Get the computed max-height from CSS (70px for desktop, 60px for mobile)
    const computedStyle = window.getComputedStyle(previewContent);
    const maxHeight = parseInt(computedStyle.maxHeight) || 70;
    
    if (contentHeight > maxHeight) {
      // Add collapsed class for smaller font size
      if (!wasExpanded) {
        previewContent.classList.add('collapsed');
      }
      showMoreBtn.style.display = 'block';
      showMoreBtn.innerHTML = '<span>...more</span>';
      showMoreBtn.classList.remove('show-less');
      
      // Restore expanded state if it was expanded
      if (wasExpanded) {
        previewContent.classList.add('expanded');
        previewContent.classList.remove('collapsed');
      }
    } else {
      previewContent.classList.remove('collapsed');
      showMoreBtn.style.display = 'none';
      
      // Restore expanded state if it was expanded
      if (wasExpanded) {
        previewContent.classList.add('expanded');
      }
    }
  }
  
  // Toggle show more/less
  showMoreBtn.addEventListener('click', () => {
    if (previewContent.classList.contains('expanded')) {
      previewContent.classList.remove('expanded');
      previewContent.classList.add('collapsed');
      showMoreBtn.innerHTML = '<span>...more</span>';
      showMoreBtn.classList.remove('show-less');
    } else {
      previewContent.classList.add('expanded');
      previewContent.classList.remove('collapsed');
      showMoreBtn.innerHTML = '<span>...less</span>';
      showMoreBtn.classList.add('show-less');
    }
  });

  // Event listeners
  editor.addEventListener('input', () => {
    updateCharCount();
    updatePreview();
  });

  editor.addEventListener('keyup', () => {
    updateCharCount();
    updatePreview();
  });

  // Keyboard shortcuts
  editor.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === 'b') {
        e.preventDefault();
        btnBold.click();
      } else if (e.key === 'i') {
        e.preventDefault();
        btnItalic.click();
      } else if (e.key === 'u') {
        e.preventDefault();
        btnUnderline.click();
      }
    }
  });

  // Toolbar buttons
  btnBold.addEventListener('click', () => {
    wrapSelectedText('**', '**');
    btnBold.classList.toggle('active');
  });

  btnItalic.addEventListener('click', () => {
    wrapSelectedText('*', '*');
    btnItalic.classList.toggle('active');
  });

  btnUnderline.addEventListener('click', () => {
    wrapSelectedText('__', '__');
    btnUnderline.classList.toggle('active');
  });

  btnBulletList.addEventListener('click', () => {
    const start = editor.selectionStart;
    const lines = editor.value.split('\n');
    let currentLine = 0;
    let charCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      if (charCount + lines[i].length >= start) {
        currentLine = i;
        break;
      }
      charCount += lines[i].length + 1;
    }
    
    lines[currentLine] = '- ' + lines[currentLine];
    editor.value = lines.join('\n');
    editor.focus();
    updateCharCount();
    updatePreview();
  });

  btnNumberList.addEventListener('click', () => {
    const start = editor.selectionStart;
    const lines = editor.value.split('\n');
    let currentLine = 0;
    let charCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      if (charCount + lines[i].length >= start) {
        currentLine = i;
        break;
      }
      charCount += lines[i].length + 1;
    }
    
    lines[currentLine] = '1. ' + lines[currentLine];
    editor.value = lines.join('\n');
    editor.focus();
    updateCharCount();
    updatePreview();
  });

  btnEmoji.addEventListener('click', (e) => {
    e.stopPropagation();
    emojiPicker.classList.toggle('show');
    iconPicker.classList.remove('show');
  });

  btnIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    iconPicker.classList.toggle('show');
    emojiPicker.classList.remove('show');
  });

  btnLink.addEventListener('click', () => {
    const url = prompt('Enter URL:');
    if (url) {
      insertTextAtCursor(editor, url + ' ');
    }
  });

  btnMention.addEventListener('click', () => {
    const name = prompt('Enter name to mention:');
    if (name) {
      insertTextAtCursor(editor, '@' + name + ' ');
    }
  });

  btnHashtag.addEventListener('click', () => {
    const tag = prompt('Enter hashtag (without #):');
    if (tag) {
      insertTextAtCursor(editor, '#' + tag + ' ');
    }
  });

  btnClearFormat.addEventListener('click', () => {
    let text = editor.value;
    text = text.replace(/\*\*(.*?)\*\*/g, '$1');
    text = text.replace(/\*(.*?)\*/g, '$1');
    text = text.replace(/__(.*?)__/g, '$1');
    editor.value = text;
    editor.focus();
    updateCharCount();
    updatePreview();
  });

  btnCopy.addEventListener('click', async () => {
    try {
      // Convert markdown to LinkedIn-compatible Unicode format
      let text = editor.value;
      text = convertToLinkedInFormat(text);
      
      await navigator.clipboard.writeText(text);
      showToast('Copied to clipboard! Ready to paste on LinkedIn!');
    } catch (err) {
      // Fallback for older browsers
      let text = editor.value;
      text = convertToLinkedInFormat(text);
      
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showToast('Copied to clipboard! Ready to paste on LinkedIn!');
    }
  });

  btnClear.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all content?')) {
      editor.value = '';
      updateCharCount();
      updatePreview();
      editor.focus();
    }
  });

  // Close pickers when clicking outside
  document.addEventListener('click', (e) => {
    if (!emojiPicker.contains(e.target) && e.target !== btnEmoji) {
      emojiPicker.classList.remove('show');
    }
    if (!iconPicker.contains(e.target) && e.target !== btnIcon) {
      iconPicker.classList.remove('show');
    }
  });

  // Show toast notification
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // Initialize
  initEmojiPicker();
  initIconPicker();
  updateCharCount();
  updatePreview();
});

