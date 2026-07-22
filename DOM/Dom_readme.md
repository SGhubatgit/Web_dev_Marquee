# 📚 JavaScript DOM (Document Object Model)

> A complete beginner-friendly guide to understanding and manipulating the DOM.

---

# 📖 Table of Contents

- What is DOM?
- What is a Node?
- Element vs Text Node
- Node Relationships
- Selecting HTML Elements
- Manipulating HTML Elements
- Working with Attributes
- Quick Summary Table

---

# 🌐 What is DOM?

The **Document Object Model (DOM)** is a programming interface for HTML and XML documents.

It represents the webpage as a **tree-like structure** where every HTML tag becomes an object (called a Node).

JavaScript uses the DOM to:

- Read HTML
- Modify HTML
- Add new elements
- Delete elements
- Change styles
- Handle events

Example HTML

```html
<body>
    <h1>Hello World</h1>
</body>
```

DOM Representation

```
Document
   │
 html
   │
 body
   │
 h1
   │
"Hello World"
```

---

# 🌳 What is a Node?

Everything inside the DOM is called a **Node**.

Examples

- Document
- HTML Element
- Text
- Comment
- Attribute

Example

```html
<h1>Hello</h1>
```

DOM Tree

```
Document
   │
 html
   │
 body
   │
 h1  ← Element Node
   │
Hello ← Text Node
```

---

# 🧩 Element Node vs Text Node

### Element Node

Represents an HTML tag.

Example

```html
<p>Hello</p>
```

`<p>` is an **Element Node**

---

### Text Node

Represents the text inside an element.

Example

```html
<p>Hello</p>
```

`Hello` is the **Text Node**

---

# 🌳 Node Relationships

Consider the following HTML

```html
<div>
    <p>JavaScript</p>
    <p>React</p>
    <p>Node.js</p>
    <p>MongoDB</p>
</div>
```

Relationship

```
div (Parent)

├── p (First Child)
├── p (Next Sibling)
├── p (Next Sibling)
└── p (Last Child)
```

### Important Relationships

| Relationship | Meaning |
|-------------|---------|
| Parent Node | Immediate parent element |
| Child Node | Direct child of parent |
| First Child | First child node |
| Last Child | Last child node |
| Next Sibling | Element after current node |
| Previous Sibling | Element before current node |

Example

```
html
│
body
│
div
│
p
```

- `body` is child of `html`
- `html` is parent of `body`
- `div` is child of `body`

Useful Properties

```javascript
element.parentNode
element.childNodes
element.children
element.firstChild
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling
```

---

# 🔍 Selecting HTML Elements

---

## 1. getElementById()

Returns a single element having the specified **id**.

If no element exists → returns **null**

If multiple elements have the same id (not recommended), only the **first occurrence** is returned.

Syntax

```javascript
document.getElementById(id)
```

Example

```html
<div id="container"></div>
```

```javascript
let box = document.getElementById("container");
console.log(box);
```

---

## 2. getElementsByClassName()

Returns a live **HTMLCollection** of all elements with the specified class.

If none exist

```
HTMLCollection []
```

Syntax

```javascript
document.getElementsByClassName("className")
```

Example

```html
<p class="para">One</p>
<p class="para">Two</p>
```

```javascript
let paras = document.getElementsByClassName("para");
console.log(paras);
```

Can also be accessed from a parent element

```javascript
let container = document.getElementById("box");
container.getElementsByClassName("para");
```

---

## 3. getElementsByTagName()

Returns all elements having the specified HTML tag.

Returns a live HTMLCollection.

Syntax

```javascript
document.getElementsByTagName("p");
```

Example

```javascript
let paragraphs = document.getElementsByTagName("p");
```

---

## 4. getElementsByName()

Selects elements using the **name attribute**.

Mostly used with

- forms
- radio buttons
- checkboxes

Example

```html
<input name="username">
<input name="username">
```

```javascript
document.getElementsByName("username");
```

---

## 5. querySelector()

Returns **only the first** matching CSS selector.

Supports

- id
- class
- tag
- attribute
- complex CSS selectors

Syntax

```javascript
document.querySelector(selector)
```

Examples

```javascript
document.querySelector("#box")

document.querySelector(".item")

document.querySelector("p")

document.querySelector("ul li")
```

---

## 6. querySelectorAll()

Returns **all matching elements** as a **NodeList**

Syntax

```javascript
document.querySelectorAll(selector)
```

Example

```javascript
document.querySelectorAll(".item");
```

---

# querySelector() vs querySelectorAll()

| querySelector() | querySelectorAll() |
|----------------|--------------------|
| Returns first match | Returns all matches |
| Returns Element | Returns NodeList |
| Faster | Slightly slower |
| Single element | Multiple elements |

---

# 🛠 Manipulating HTML Elements

---

## 1. createElement()

Creates a new HTML element.

Syntax

```javascript
document.createElement(tagName)
```

Example

```javascript
let li = document.createElement("li");
```

---

## 2. appendChild()

Adds a child at the end of a parent.

Returns the appended node.

Example

```javascript
let li = document.createElement("li");

li.innerHTML = "New Item";

document.querySelector("ul").appendChild(li);
```

---

## 3. textContent

Gets or changes text content.

✔ Includes hidden text.

Example

```javascript
console.log(document.querySelector("ul").textContent);
```

Changing text

```javascript
document.querySelector("h1").textContent = "Welcome";
```

---

## 4. innerText

Gets visible text only.

Hidden elements are ignored.

Example

```javascript
console.log(document.querySelector("ul").innerText);
```

Difference

```html
<p>Hello <span style="display:none;">World</span></p>
```

```
textContent → HelloWorld

innerText → Hello
```

---

## 5. innerHTML

Reads or replaces HTML.

Example

```javascript
document.querySelector("div").innerHTML =
"<h1>New Heading</h1>";
```

---

## 6. after()

Inserts nodes immediately **after** an element.

Syntax

```javascript
element.after(node1,node2,...)
```

Example

```javascript
let h4 = document.createElement("h4");

h4.innerText = "Heading 4";

let p = document.createElement("p");

p.innerText = "Paragraph";

document.querySelector("ul").after(p,h4);
```

---

## 7. append()

Adds multiple nodes or text at the end.

Unlike appendChild(), it can insert strings too.

Example

```javascript
let li = document.createElement("li");

li.innerText = "Append Item";

document.querySelector("ul").append(li);
```

---

## 8. prepend()

Adds a node as the first child.

Example

```javascript
let li = document.createElement("li");

li.innerText = "First Item";

document.querySelector("ul").prepend(li);
```

---

## 9. insertAdjacentHTML()

Inserts HTML without replacing existing content.

Syntax

```javascript
element.insertAdjacentHTML(position, html)
```

Positions

| Position | Meaning |
|-----------|---------|
| beforebegin | Before element |
| afterbegin | First child |
| beforeend | Last child |
| afterend | After element |

Example

```javascript
document.querySelector("ul")
.insertAdjacentHTML(
"beforeend",
"<li>New Item</li>"
);
```

---

## 10. replaceChild()

Replaces an existing child.

Syntax

```javascript
parent.replaceChild(newChild, oldChild);
```

Example

```javascript
let newNode = document.createElement("li");

newNode.innerText = "New";

let parent = document.querySelector("ul");

parent.replaceChild(
newNode,
parent.firstElementChild
);
```

---

## 11. cloneNode()

Creates a copy of an element.

Syntax

```javascript
cloneNode(deep)
```

Default

```javascript
false
```

Only parent is copied.

Using

```javascript
true
```

Copies parent + children.

Example

```javascript
let copy = parent.cloneNode(true);
```

---

## 12. removeChild()

Removes a child node.

Example

```javascript
parent.removeChild(parent.firstElementChild);
```

or

```javascript
parent.removeChild(parent.lastElementChild);
```

---

# 🏷 Working with Attributes

---

## getAttribute()

Gets an attribute value.

```javascript
element.getAttribute("href");
```

---

## setAttribute()

Creates or updates an attribute.

```javascript
element.setAttribute("class","active");
```

---

## hasAttribute()

Checks if an attribute exists.

```javascript
element.hasAttribute("disabled");
```

Returns

```javascript
true
```

or

```javascript
false
```

---

## removeAttribute()

Removes an attribute.

```javascript
element.removeAttribute("class");
```

---

# 📌 HTMLCollection vs NodeList

| HTMLCollection | NodeList |
|---------------|----------|
| Live Collection | Static Collection |
| Returned by getElements... | Returned by querySelectorAll() |
| Updates automatically | Doesn't update automatically |
| Array-like | Array-like |

---

# ⚡ textContent vs innerText vs innerHTML

| Property | Hidden Text | HTML Tags | Can Modify |
|-----------|------------|-----------|------------|
| textContent | ✅ Yes | ❌ No | ✅ Yes |
| innerText | ❌ No | ❌ No | ✅ Yes |
| innerHTML | ✅ Yes | ✅ Yes | ✅ Yes |

---

# 🚀 Quick Revision

| Method | Purpose |
|---------|---------|
| getElementById() | Select by id |
| getElementsByClassName() | Select by class |
| getElementsByTagName() | Select by tag |
| getElementsByName() | Select by name |
| querySelector() | First matching CSS selector |
| querySelectorAll() | All matching CSS selectors |
| createElement() | Create new element |
| appendChild() | Add child at end |
| append() | Append node/text |
| prepend() | Add first child |
| after() | Insert after element |
| insertAdjacentHTML() | Insert HTML at specific position |
| replaceChild() | Replace child node |
| cloneNode() | Clone element |
| removeChild() | Remove child node |
| textContent | Read/Write text (includes hidden text) |
| innerText | Read visible text |
| innerHTML | Read/Write HTML |
| getAttribute() | Get attribute value |
| setAttribute() | Set attribute |
| hasAttribute() | Check attribute |
| removeAttribute() | Remove attribute |

---

# 🎯 Best Practices

- ✅ Use `querySelector()` for selecting a single element.
- ✅ Use `querySelectorAll()` when multiple elements are needed.
- ✅ Prefer `textContent` over `innerHTML` when inserting plain text (safer and faster).
- ✅ Use `createElement()` + `append()` for dynamically creating elements.
- ✅ Avoid duplicate `id` values in HTML.
- ✅ Use `cloneNode(true)` when child elements should also be copied.

---

## 🎉 Congratulations!

You now know the fundamentals of the **JavaScript DOM**, including:

- DOM Tree
- Nodes & Relationships
- Selecting Elements
- Manipulating Elements
- Working with Attributes
- Differences between common DOM methods

Master these APIs and you'll be able to build dynamic, interactive web applications with confidence.