### **Botão (Button)**

O componente `causs-button` é um botão customizável com suporte a diferentes variantes e estados. Ele pode ser usado para representar ações no seu aplicativo.

#### **Como Usar**

```html
<causs-button>Default Button</causs-button>
<causs-button variant="secondary">Secondary Button</causs-button>
<causs-button variant="destructive">Destructive Button</causs-button>
<causs-button variant="outline">Outline Button</causs-button>
<causs-button variant="ghost">Ghost Button</causs-button>
<causs-button disabled>Disabled Button</causs-button>
```
#### **Atributos Disponíveis**

- **`variant`**: Define a variante do botão.
    - Valores: `secondary`, `destructive`, `outline`, `ghost`.
    - Valor padrão: Sem variante (botão padrão).
- **`disabled`**: Desabilita o botão quando presente.
- `full-width`: Faz o botão ocupar 100% da largura do container pai.

#### **Exemplo de Botão em Largura Total**

```html
<causs-button full-width>Full-Width Button</causs-button>
```

---

### **Card**

O componente `causs-card` é um cartão flexível que suporta estruturação de conteúdo com slots para cabeçalho, conteúdo e rodapé.

#### **Como Usar**

```html
<causs-card> 
	<div slot="header"> 
		<h3>Card Title</h3> 
	</div> 
	<div slot="content">
		<p>Here is the card content. You can add any HTML content here!</p>
	</div> 
	<div slot="footer">
		<causs-button variant="secondary">Cancel</causs-button>
		<causs-button>Save</causs-button>
	</div> 
</causs-card>
```

#### **Estrutura dos Slots**

- **`slot="header"`**: Área do cabeçalho.
- **`slot="content"`**: Área do conteúdo principal.
- **`slot="footer"`**: Área do rodapé.

---

### **Avatar**

O componente `causs-avatar` é usado para exibir imagens de perfil ou representações visuais de usuários. Ele suporta variantes redondas e quadradas, além de tamanhos customizáveis.

#### **Como Usar**

``` html
<causs-avatar src="https://via.placeholder.com/48"></causs-avatar>

<causs-avatar src="https://via.placeholder.com/64" variant="square" size="64"></causs-avatar>

<causs-avatar src="https://via.placeholder.com/128" size="128"></causs-avatar>`
```

#### **Atributos Disponíveis**

- **`src`**: URL da imagem do avatar (obrigatório).
- **`variant`**: Define o formato do avatar.
    - Valores: `round` (padrão), `square`.
- **`size`**: Define o tamanho do avatar em pixels (largura e altura iguais).

#### **Tamanhos Personalizados**

```html
<causs-avatar src="https://via.placeholder.com/150" size="150"></causs-avatar>
```

***
### **Breadcrumbs**

O componente `causs-breadcrumb` é utilizado para criar trilhas de navegação, permitindo que o usuário visualize o caminho até a página atual de uma aplicação. Ele é composto por diferentes subcomponentes, como a lista de itens de navegação, separadores e links.

#### **Como Usar**

```html
<causs-breadcrumb> 
	<causs-breadcrumb-list>
		<causs-breadcrumb-item>
			<causs-breadcrumb-link href="#">Home</causs-breadcrumb-link>
		</causs-breadcrumb-item>
		<causs-breadcrumb-separator></causs-breadcrumb-separator>
		<causs-breadcrumb-item>
			<causs-breadcrumb-link href="#">Library</causs-breadcrumb-link>
		</causs-breadcrumb-item>
		<causs-breadcrumb-separator></causs-breadcrumb-separator>
		<causs-breadcrumb-item>
			<causs-breadcrumb-page>Current Page</causs-breadcrumb-page>
		</causs-breadcrumb-item>
	</causs-breadcrumb-list>
</causs-breadcrumb>
```

#### **Estrutura dos Componentes**

- **`causs-breadcrumb`**: Componente principal que envolve a lista de itens.
- **`causs-breadcrumb-list`**: Contém os itens de navegação, aglutinando os `causs-breadcrumb-item`.
- **`causs-breadcrumb-item`**: Representa cada item da navegação na lista.
- **`causs-breadcrumb-link`**: Define o link clicável dentro de um item de navegação.
- **`causs-breadcrumb-separator`**: Usado para separar os itens da lista com um símbolo de separação (geralmente `>`).
- **`causs-breadcrumb-page`**: Representa a página atual, sem link, sendo o último item da navegação.

#### **Atributos Disponíveis**

- **`href`** (em `causs-breadcrumb-link`): URL para onde o link deve direcionar.
- **`disabled`** (em `causs-breadcrumb-link`): Desabilita o link para impedir a navegação.

***

### **Input**

O componente `causs-input` é um campo de entrada personalizável, que suporta diferentes variantes e estados. Ele pode ser utilizado para inserir dados no seu aplicativo.

#### **Como Usar**

```html
<causs-input label="Nome Completo" placeholder="Digite seu nome"></causs-input>
<causs-input variant="file" label="Anexar Arquivo" type="file"></causs-input>
<causs-input disabled label="Email" placeholder="Digite seu e-mail"></causs-input>
<causs-input variant="default" label="Senha" placeholder="Digite sua senha"></causs-input>

```

#### **Atributos Disponíveis**

- **`label`**: Define o texto do rótulo do campo de entrada.
- **`variant`**: Define a variante do input.
    - Valores: `default`, `file`.
    - Valor padrão: `default`.
- **`type`**: Define o tipo do campo de entrada.
    - Valores: `text`, `password`, `email`, `file`, etc.
    - Valor padrão: `text`.
- **`disabled`**: Desabilita o campo de entrada quando presente.
- **`placeholder`**: Texto que aparece quando o campo está vazio.

---

### **Badge**

O componente `causs-badge` é utilizado para exibir pequenos rótulos ou etiquetas de status, com diferentes variantes de estilo.

#### **Como Usar**

```html
<causs-badge>Default Badge</causs-badge>
<causs-badge variant="secondary">Secondary Badge</causs-badge>
<causs-badge variant="destructive">Destructive Badge</causs-badge>
<causs-badge variant="outline">Outline Badge</causs-badge>

```
#### **Atributos Disponíveis**

- **`variant`**: Define a variante do badge.
    - Valores: `primary`, `secondary`, `destructive`, `outline`.
    - Valor padrão: `primary`.
- **Conteúdo do Badge**: O texto dentro do componente `causs-badge` será exibido como o conteúdo do badge.

***

### **Calendário (Calendar)**

O componente `causs-calendar` é um calendário interativo que permite a navegação entre meses e a seleção de datas. Ele pode ser utilizado em diversos contextos, como agendamentos e organização de eventos.

---

#### **Como Usar**

```html
<causs-calendar></causs-calendar>
```

#### **Exemplo com Data Inicial Personalizada**

```html
<causs-calendar date="2024-12-25"></causs-calendar>
```

---

### **Atributos Disponíveis**

- **`date`**: Define a data inicial exibida no calendário.
    - Formato: `YYYY-MM-DD`.
    - Valor padrão: A data atual (hoje).

---

#### **Eventos Disponíveis**

- **`day-selected`**: Disparado quando um dia é selecionado.
    - **Detalhes**:
        - `event.detail.date`: Data selecionada no formato `Date`.

#### **Exemplo de Captura do Evento `day-selected`**

```html
<causs-calendar></causs-calendar>

<script>
	document.querySelector('causs-calendar').addEventListener('day-selected', (event) => {
			const selectedDate = event.detail.date;
			console.log('Data selecionada:', selectedDate.toDateString());
		});
</script>

```

---

### **Personalização de Estilo**

O componente `causs-calendar` suporta **CSS Custom Properties** para customização de cores, fontes e outros elementos visuais.

#### **Variáveis Disponíveis**

|Variável|Descrição|Valor Padrão|
|---|---|---|
|`--primary`|Cor principal do calendário.|`#333`|
|`--background`|Cor de fundo dos dias.|`#f9f9f9`|
|`--font-family-variant`|Fonte usada no header e nos botões.|`inherit`|
|`--button-border-radius`|Bordas dos botões de navegação.|`4px`|

---

#### **Exemplo de Customização**

```html
<causs-calendar 
	style="
		--primary: #007bff;
		--background: #e6f7ff;
		--font-family-variant: 'Arial';"
></causs-calendar>
```

---

### **Métodos Disponíveis**

- **`changeMonth(n)`**: Altera o mês exibido no calendário.
    
    - `n`: Número de meses para avançar ou retroceder.
    - Exemplo: `calendar.changeMonth(1);` (próximo mês).
- **`getMonthName()`**: Retorna o nome do mês atual.
    
    - Exemplo: `console.log(calendar.getMonthName());` (retorna `January` para o índice `0`).

#### **Exemplo de Uso dos Métodos**

```html
<causs-calendar id="calendar"></causs-calendar>
<script>
	const calendar = document.querySelector('#calendar');
	calendar.changeMonth(1); // Avança para o próximo mês
	console.log(calendar.getMonthName()); // Nome do mês atual 
</script>
```

---

## **Estilo e Personalização**

Você pode personalizar os componentes com variáveis CSS globais. Aqui estão algumas variáveis disponíveis:

- **Para Botão:**
    
    - `--primary`: Cor de fundo do botão padrão.
    - `--secondary`: Cor de fundo do botão secundário.
    - `--red`: Cor de fundo para o botão destrutivo.
    - `--font-family`: Família de fontes dos botões.
    - `--button-border-radius`: Raio das bordas do botão.
- **Para Avatar:**
    
    - `--avatar-size`: Tamanho do avatar (aplicado automaticamente com o atributo `size`).
- **Para Card:**
    
    - Estilize usando classes específicas no CSS global.

---

## **Integração e Scripts**

Certifique-se de incluir os scripts necessários no seu projeto:

```html
<script src="./dist/index.js"></script>
<link rel="stylesheet" href="./dist/index.css">
```
### **Próximos Passos**

- Adicionar mais componentes como **modal**, **tabs**, ou **dropdown**.
- Melhorar a acessibilidade (ARIA).
- Criar temas para a biblioteca.# causs-components
