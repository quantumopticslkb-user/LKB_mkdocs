---
title: Components
description: ''
---

# Markdown syntax

Short markdown tutorial

## Typographie

### Title
``` markdown
# Titre 1
## Titre 2: First level
### Titre 3 : second level
#### Titre 4 : not in the menu
```


### Formatting

```markdown
normal text 
**bold text**
*italic text*
~~The world is flat.~~
```

normal text 

**bold text**

*italic text*

~~The world is flat.~~

---

> Citation 

```markdown
> Citation 
```

---

### List 

1. First item
2. Second item
3. Third item

```markdown
1. First item
2. Second item
3. Third item
```
---


- First item
- Second item
- Third item
    - indented item

```markdown
- First item
- Second item
- Third item
    - indented item
```
---


### Link

[arXiv](https://www.arxiv.org)

```markdown
[arXiv](https://www.arxiv.org)
```


## Components




### `<Alert />`

::code-group

  ::code-block{label="Preview" preview}
    ::alert{type="info" style="margin-top: 0;"}
    Check out an **info** alert with `code` and a [link](/).
    ::

    ::alert{type="success"}
    Check out a **success** alert with `code` and a [link](/).
    ::

    ::alert{type="warning"}
    Check out a **warning** alert with `code` and a [link](/).
    ::

    ::alert{type="danger" style="margin-bottom: 0;"}
    Check out a **danger** alert with `code` and a [link](/).
    ::
  ::

  ```md [Code]
  ::alert{type="info"}
  Check out an **info** alert with `code` and a [link](/).
  ::
  ::alert{type="success"}
  Check out a **success** alert with `code` and a [link](/).
  ::
  ::alert{type="warning"}
  Check out a **warning** alert with `code` and a [link](/).
  ::
  ::alert{type="danger"}
  Check out a **danger** alert with `code` and a [link](/).
  ::
  ```

::



### `<Badge />`

`<Badge />` support same types as `<Alert />`.

::code-group

  ::code-block{label="Preview" preview}
    ::div{style="display:flex; gap: 1rem;"}
      :badge[v1.2]

      :badge[Deprecated]{type="warning"}

      ::badge{type="danger"}
      Not found!
      ::
    ::
  ::

  ```md [Code]
  :badge[v1.2]
  
  :badge[Deprecated]{type="warning"}
  
  ::badge{type="danger"}
  Not found!
  ::
  ```

::

<!-- 
::props{of="Badge"}
::
-->



### `<BlockHero />`

::code-group

   ::code-block{label="Preview"}
    ::block-hero
    ---
    cta:
      - Get started
      - /get-started
    secondary:
      - Open on GitHub →
      - https://github.com/
    snippet: install python
    ---
    #title
    Documentation
  
    #description
    Type your text here
    ::
   ::

   ```md [Code]
   ::block-hero
    ---
    cta:
      - Get started
      - /get-started
    secondary:
      - Open on GitHub →
      - https://github.com/
    snippet: install python
    ---
    #title
    Documentation
  
    #description
    Type your text here
  ::
   ```

::



### `<ButtonLink />`
::code-group

  ::code-block{label="Preview" preview}
    :button-link[LINK]{icon="IconStackBlitz" href="https://github.com/" blank}
  ::

  ```md [Code]
  :button-link[LINK]{icon="IconStackBlitz" href="https://github.com/" blank}
  ```

::

<!-- 
::props{of="Alert"}
::
-->



### `<Callout />`

`<Callout />` support same types as `<Alert />`.

::code-group

  ::code-block{label="Preview"}
    ::callout
    #summary
    This is a callout! Click me to open.

    #content
    This is the content of the callout.
    ::

    ::callout{type="warning"}
    #summary
    This is a callout! Click me to open.

    #content
    This is the content of the callout.
    ::
  ::

   ```md [Code]
   ::callout
   #summary
   This is a callout! Click me to open.
   #content
   This is the content of the callout.
   ::
    
   ::callout{type="warning"}
   #summary
   This is a callout! Click me to open.
   #content
   This is the content of the callout.
   ::
   ```

::



### `<Card />`

::code-group

  ::code-block{label="Preview"}
    ::card
    ---
    icon: logos:nuxt-icon
    ---
    #title
    Topic 1.
    #description
    Describe your topic here
    ::
  ::

  ```md [Code]
   ::card{icon="logos:nuxt-icon"}
   #title
   Topic 1.
   #description
   Describe your topic here
   ::
   ```

::



### `<CardGrid />`

::code-group
  
  ::code-block{label="Preview"}
    ::card-grid
    #title
    What is this ?

    #root
    :ellipsis

    #default
      ::card
      #title
      Topic 1.
      #description
      Description 1.
      We have written a starting package which lists the first steps during your first week here.
      ::
      ::card
      #title
      Topic 2.
      #description
      Description 2.
      We have written a starting package which lists the first steps during your first week here.
      ::
      ::card
      #title
      Topic 3.
      #description
      Description 3.
      We have written a starting package which lists the first steps during your first week here.
      ::
    ::
  ::

  ```md [Code]
  ::card-grid
  #title
  What is this ?
  #root
  :ellipsis
  #default
    ::card
    #title
    Topic 1.
    #description
    Description 1.
    We have written a starting package which lists the first steps during your first week here.
    ::
    ::card
    #title
    Topic 2.
    #description
    Description 2.
    We have written a starting package which lists the first steps during your first week here.
    ::
    ::card
    #title
    Topic 3.
    #description
    Description 3.
    We have written a starting package which lists the first steps during your first week here.
    ::
  ::
  ```

::

<!-- 
::props{of="CardGrid"}
::
-->



### `<CodeGroup />`

This component uses `slots` to create a tab panel of your code examples or preview.

::code-group

  ::code-block{label="Preview" preview}
    ::code-group
      ```bash [Yarn]
      yarn add docus
      ```

      ```bash [NPM]
      npm install docus
      ```
    ::
  ::

  ```md [Code]
  ::code-group
    ```bash [Yarn]
    yarn add docus
    ```
    ```bash [NPM]
    npm install docus
    ```
  ::
  ```

### `<CodeBlock />`
To be used inside a `<CodeGroup />` component to display a preview of some rendered code.
::code-group
::code-block{label="Preview" preview}
  ::badge
  Hello World!
  ::
::
```md [Code]
/* Added as a child of `<CodeGroup />` */
::code-block{label="Preview" preview}
  ::badge
  Hello World!
  ::
::
```

::

<!-- 
::props{of="CodeBlock"}
::
-->



### `<CopyButton />`


::code-group

::code-block{label="Preview" preview}
  :copy-button{content="hey!"}
::

```md [Code]
:copy-button{content="hey!"}
```

::

<!-- 
::props{of="CodeBlock"}
::
-->



### `<Icon />`

Icon component gives you access to all icons from [icones.js.org](https://icones.js.org).

::code-group

  ::code-block{label="Preview" preview}
  :icon{name="streamline:ecology-science-planet-solar-system-ring-planet-saturn-space-astronomy"}
  :icon{name="academicons:arxiv"}
  :icon{name="academicons:google-scholar"}
  ::

  ```md [Code]
  :icon{name="streamline:ecology-science-planet-solar-system-ring-planet-saturn-space-astronomy"}
  :icon{name="academicons:arxiv"}
  :icon{name="academicons:google-scholar"}
  ```

::



### `<List with style/>`

::code-group

  ::code-block{label="Preview" preview}
    ::list{type="primary"}
    - **Important**
    - Always
    ::

    ::list{type="success"}
    - Amazing
    - Congrats
    ::

    ::list{type="info"}
    - Do you know?
    - You can also do this
    ::

    ::list{type="warning"}
    - Be careful
    - Use with precautions
    ::

    ::list{type="danger"}
    - Drinking too much
    - Driving drunk
    ::

  ::

  ```md [Code]
  ::list{type="primary"}
  - **Important**
  - Always
  ::
  ::list{type="success"}
  - Amazing
  - Congrats
  ::
  ::list{type="info"}
  - Do you know?
  - You can also do this
  ::
  ::list{type="warning"}
  - Be careful
  - Use with precautions
  ::
  ::list{type="danger"}
  - Drinking too much
  - Driving drunk
  ::
  ```

::

<!-- 
::props{of="List"}
::
-->



### `<Terminal />`

::code-group

  ::code-block{label="Preview" preview}
    :terminal{content="install python"}
  ::

  ```md [Code]
  :terminal{content="install python"}
  ```

::

<!-- 
::props{of="Terminal"}
::
-->

::source-link
---
source: "components/content/Terminal.vue"
---
::

---

### `<VideoPlayer />`

::code-group

  ::code-block{label="Preview" preview}
    ::div
      :video-player{src="https://www.youtube.com/watch?v=df1lwuE46x4"}
    ::
  ::

  ```md [Code]
  ::div
    :video-player{src="https://www.youtube.com/watch?v=df1lwuE46x4"}
  ::
  ```

::

<!-- 
::props{of="VideoPlayer"}
::
-->

::source-link
---
source: "components/content/VideoPlayer.vue"
---
::














## MD components

### Tableau


| Syntax | Description |
| ------ | ----------- |
| Header | Title |
| Paragraph | Text |

```markdown
| Syntax | Description |
| ------ | ----------- |
| Header | Title |
| Paragraph | Text |
```
### Footnote 
Here's a sentence with a footnote. [^1]
[^1]: This is the footnote.

```markdown
Here's a sentence with a footnote. [^1]
[^1]: This is the footnote.
```

### Task list
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

```markdown
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

