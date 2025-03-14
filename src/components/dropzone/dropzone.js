class Dropzone extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    const template = `
      <style>
        :host {
          display: block;
        }
        .dropzone {
          border: 2px dashed var(--components-border);
          border-radius: var(--border-radius);
          padding: 32px;
          text-align: center;
          background-color: var(--background);
          transition: border-color 0.3s ease, background-color 0.3s ease;
          cursor: pointer;
        }
        .dropzone.dragover {
          border-color: var(--primary);
          background-color: var(--foreground);
        }
        .dropzone p {
          margin: 16px 0 0;
          color: var(--text-black);
          font-size: 14px;
        }
        .preview-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }
        .file-preview {
          position: relative;
          padding: 8px;
          border: 1px solid var(--components-border);
          border-radius: var(--border-radius);
          background: var(--background);
        }
        .remove-file {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 20px;
          height: 20px;
          border: none;
          border-radius: 50%;
          background: var(--danger);
          color: var(--white);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: background-color 0.3s ease;
        }
        .remove-file:hover {
          background: var(--danger-hover);
        }
        .file-name {
          margin-top: 8px;
          font-size: 12px;
          color: var(--subtext-black);
          word-break: break-all;
        }
        input[type="file"] {
          display: none;
        }
      </style>
      <div class="dropzone">
        <slot name="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
        </slot>
        <p><slot>Drag files here or click to upload</slot></p>
        <input type="file" hidden multiple />
      </div>
      <div class="preview-container"></div>
    `;
    
    this.shadowRoot.innerHTML = template;
    this.files = [];
  }
  
  connectedCallback() {
    const dropzone = this.shadowRoot.querySelector('.dropzone');
    const input = this.shadowRoot.querySelector('input');
    
    dropzone.addEventListener('click', () => input.click());
    
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
    
    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragover');
    });
    
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      
      if (e.dataTransfer.files.length) {
        input.files = e.dataTransfer.files;
        this.handleFiles(e.dataTransfer.files);
      }
    });
    
    input.addEventListener('change', () => {
      this.handleFiles(input.files);
    });
  }
  
  handleFiles(fileList) {
    const previewContainer = this.shadowRoot.querySelector('.preview-container');
    const newFiles = Array.from(fileList);
    
    this.files = [...this.files, ...newFiles];
    
    newFiles.forEach(file => {
      const preview = document.createElement('div');
      preview.className = 'file-preview';
      
      if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        const reader = new FileReader();
        
        reader.onload = (e) => {
          img.src = e.target.result;
        };
        
        reader.readAsDataURL(file);
        preview.appendChild(img);
      } else {
        preview.textContent = file.name.split('.').pop().toUpperCase();
      }
      
      const removeBtn = document.createElement('div');
      removeBtn.className = 'remove-file';
      removeBtn.textContent = '×';
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.removeFile(file);
        preview.remove();
      });
      
      const fileName = document.createElement('div');
      fileName.className = 'file-name';
      fileName.textContent = file.name;
      
      preview.appendChild(removeBtn);
      previewContainer.appendChild(preview);
      previewContainer.appendChild(fileName);
    });
    
    this.dispatchEvent(new CustomEvent('files-changed', {
      detail: { files: this.files }
    }));
  }
  
  removeFile(file) {
    this.files = this.files.filter(f => f !== file);
    
    this.dispatchEvent(new CustomEvent('files-changed', {
      detail: { files: this.files }
    }));
  }
}

customElements.define('causs-dropzone', Dropzone); 