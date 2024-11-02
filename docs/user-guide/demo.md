---
title: Components
description: ''
---

# Markdown Reference

Quick markdown and mkdocs reference list. <br>
See the [official documentation](https://squidfunk.github.io/mkdocs-material/reference/formatting/) for more.

## Typography

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
==This was marked (highlight)==
^^This was inserted (underline)^^
~~This was deleted (strikethrough)~~
```

<div class="result" markdown>
normal text <br>
**bold text** <br>
*italic text* <br>
==This was marked (highlight)==<br>
^^This was underline^^<br>
~~This was deleted (strikethrough)~~
</div>


### Adding keyboard keys

``` markdown title="Keyboard keys"
++ctrl+alt+del++
```

<div class="result" markdown>

++ctrl+alt+del++

</div>



### Citation


```markdown
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
```
<div class="result" markdown>
>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>

## Maths

### Using block syntax

Blocks must be enclosed in `$$...$$` or `\[...\]` on separate
lines:

``` latex title="block syntax"
$$
\cos x=\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k)!}x^{2k}
$$
```

<div class="result" markdown>

$$
\cos x=\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k)!}x^{2k}
$$

</div>

### Using inline syntax

Inline blocks must be enclosed in `$...$` or `\(...\)`:

``` latex title="inline syntax"
The homomorphism $f$ is injective if and only if its kernel is only the
singleton set $e_G$, because otherwise $\exists a,b\in G$ with $a\neq b$ such
that $f(a)=f(b)$.
```

<div class="result" markdown>

The homomorphism $f$ is injective if and only if its kernel is only the
singleton set $e_G$, because otherwise $\exists a,b\in G$ with $a\neq b$ such
that $f(a)=f(b)$.

</div>

## Links

### Internal links
```markdown title='Internal'
[Starting Package](/starting-package)
```

<div class="result" markdown>
[Starting Package](/starting-package)
</div>

### External links
```markdown title='External'
[arXiv](https://www.arxiv.org)
```

<div class="result" markdown>
[arXiv](https://www.arxiv.org)
</div>


## List 

### Unordered lists
Unordered lists can be written by prefixing a line with a `-`, `*` or `+` list
marker, all of which can be used interchangeably. Furthermore, all flavors
of lists can be nested inside each other:

``` markdown title="List, unordered"
- Nulla et rhoncus turpis. Mauris ultricies elementum leo. 

    * Duis mollis est eget nibh volutpat, fermentum aliquet dui mollis.
    * Nam vulputate tincidunt fringilla.
    * Nullam dignissim ultrices urna non auctor.
```

<div class="result" markdown>

- Nulla et rhoncus turpis. Mauris ultricies elementum leo.

    * Duis mollis est eget nibh volutpat, fermentum aliquet dui mollis.
    * Nam vulputate tincidunt fringilla.
    * Nullam dignissim ultrices urna non auctor.
 </div>

### Ordered lists
Ordered lists must start with a number immediately followed by a dot. The
numbers do not need to be consecutive and can be all set to `1.`, as they will
be re-numbered when rendered:


``` markdown title="List, ordered"
1.  Vivamus id mi enim. Integer id turpis sapien. 

    1.  Vivamus venenatis porttitor tortor sit amet rutrum. 
    2.  Morbi eget dapibus felis. 

        1.  Mauris dictum mi lacus
        2.  Ut sit amet placerat ante
        3.  Suspendisse ac eros arcu
```
<div class="result" markdown>
1.  Vivamus id mi enim. Integer id turpis sapien. 

    1.  Vivamus venenatis porttitor tortor sit amet rutrum. 

    2.  Morbi eget dapibus felis. 

        1.  Mauris dictum mi lacus
        2.  Ut sit amet placerat ante
        3.  Suspendisse ac eros arcu
 </div>


### Definition lists

When [Definition Lists] is enabled, lists of arbitrary key-value pairs, e.g. the
parameters of functions or modules, can be enumerated with a simple syntax:

``` markdown title="Definition list"
`Lorem ipsum dolor sit amet`

:   Sed sagittis eleifend rutrum. 

`Cras arcu libero`

:   Aliquam metus eros, pretium sed nulla venenatis, faucibus auctor ex. 

    Duis mollis est eget nibh volutpat, fermentum aliquet dui mollis.
    Nam vulputate tincidunt fringilla.
```

<div class="result" markdown>

`Lorem ipsum dolor sit amet`

:   Sed sagittis eleifend rutrum. 

`Cras arcu libero`

:   Aliquam metus eros, pretium sed nulla venenatis, faucibus auctor ex. 

    Duis mollis est eget nibh volutpat, fermentum aliquet dui mollis.
    Nam vulputate tincidunt fringilla.

</div>

### Task lists

Unordered list items can be prefixed with `[ ]` to
render an unchecked checkbox or `[x]` to render a checked checkbox, allowing
for the definition of task lists:

``` markdown title="Task list"
- [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
- [ ] Vestibulum convallis sit amet nisi a tincidunt
    * [x] In hac habitasse platea dictumst
    * [ ] Praesent sed risus massa
- [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque
```

<div class="result" markdown>

- [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
- [ ] Vestibulum convallis sit amet nisi a tincidunt
    * [x] In hac habitasse platea dictumst
    * [ ] Praesent sed risus massa
- [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque

</div>

## Groups

### Grouping code blocks

Code blocks are one of the primary targets to be grouped, and can be considered
a special case of content tabs, as tabs with a single code block are always
rendered without horizontal spacing:

``` title="Content tabs with code blocks"
=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```
```

<div class="result" markdown>

=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```

</div>

## Table


```markdown title="A simple table"
| Syntax | Description |
| ------ | ----------- |
| Header | Title |
| Paragraph | Text |
```
<div class="result" markdown>

| Syntax | Description |
| ------ | ----------- |
| Header | Title |
| Paragraph | Text |

</div>



## Raise attention

### Annotations

Annotations consist of two parts: a marker, which can be placed anywhere in
a block marked with the `annotate` class, and content located in a list below
the block containing the marker:

``` markdown title="Text with annotations"
Lorem ipsum dolor sit amet, (1) consectetur adipiscing elit.
{ .annotate }

1.  :man_raising_hand: I'm an annotation! I can contain `code`, __formatted
    text__, images, ... basically anything that can be expressed in Markdown.
```

<div class="result" markdown>

Lorem ipsum dolor sit amet, (1) consectetur adipiscing elit.
{ .annotate }

1.  :man_raising_hand: I'm an annotation! I can contain `code`, __formatted
    text__, images, ... basically anything that can be written in Markdown.

</div>

### Box

Boxes follow a simple syntax: a block starts with `!!!`, followed by a
single keyword used as a [type qualifier]. The content of the block follows on
the next line, indented by four spaces:

``` markdown title="Box"
!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus.
```

<div class="result" markdown>

!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus.

</div>

#### Collapsible box

When [Details] is enabled and the block is started with `???` instead
of `!!!`, the admonition is rendered as a collapsible block with a small toggle
on the right side:

``` markdown title="Collapsible"
??? note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

<div class="result" markdown>

??? note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

</div>

#### Possible type of boxes.

- note: :octicons-tag-16:
- abstract: :octicons-checklist-16:
- info:  :octicons-info-16:
- tip:  :octicons-squirrel-16:
- success:  :octicons-check-16:
- question:  :octicons-question-16:
- warning:  :octicons-alert-16:
- failure:  :octicons-x-circle-16:
- danger:  :octicons-zap-16:
- bug:  :octicons-bug-16:
- example:  :octicons-beaker-16:
- quote:  :octicons-quote-16:

### Footnotes
Here's a sentence with a footnote. [^1]
[^1]: This is the footnote. 

```markdown
Here's a sentence with a footnote. [^1]
[^1]: This is the footnote. 
```


## Images

### Syntax 
Simple syntax is 
``` markdown 
![Mon Image](https://dummyimage.com/800x600/) 
```

### Image folder
Images are stored in `/assets/img/` <br>
![Logo](/assets/img/LKB_Logo.png){ width=200 }

### Image size
Smaller images could be rendered using `{ width=200 }` attribute
``` markdown title="Image size and location"
![Logo](/assets/img/LKB_Logo.png){ width=200 }
```

### Image alignment

When [Attribute Lists] is enabled, images can be aligned by adding the
respective alignment directions via the `align` attribute, i.e. `align=left` or
`align=right`:


``` markdown title="Image, aligned to left"
![Image title](https://dummyimage.com/600x400/eee/aaa){ align=left }
```

<div class="result" markdown>

![Image title](https://dummyimage.com/600x400/f5f5f5/aaaaaa?text=–%20Image%20–){ align=left width=300 }

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.

</div>




