If you want to build a complex Notion-like editor that supports features such as resizing and split-screen layouts, you’ll need a format that can handle rich content and layout information effectively. Here are some file formats and saving schemes you might consider, each with its own advantages:

### 1. **JSON (JavaScript Object Notation)**

**Description**: JSON is a flexible and widely-used format for storing and exchanging structured data. It can handle complex data structures, including nested elements and metadata.

**Use Case**: Suitable for storing rich content with layout and styling information, especially if you need to serialize and deserialize content for use in a web application.

**Structure Example**:

```json
{
  "type": "document",
  "content": [
    {
      "type": "section",
      "id": "section-1",
      "styles": {
        "width": "50%",
        "height": "100vh"
      },
      "content": [
        {
          "type": "text",
          "content": "This is a text block."
        },
        {
          "type": "image",
          "src": "path/to/image.jpg"
        }
      ]
    },
    {
      "type": "split",
      "direction": "horizontal",
      "children": [
        {
          "type": "section",
          "content": [
            {
              "type": "text",
              "content": "Left side content."
            }
          ]
        },
        {
          "type": "section",
          "content": [
            {
              "type": "text",
              "content": "Right side content."
            }
          ]
        }
      ]
    }
  ]
}

```

**Advantages**:

- Easily readable and writable by humans and machines.
- Widely supported in most programming languages.
- Flexible and can be extended to accommodate new features.

**Disadvantages**:

- May become verbose for very large documents with many nested elements.
- Requires parsing and generating JSON on the server and client sides.

### 2. **Markdown with Extended Syntax**

**Description**: Markdown is a lightweight markup language with plain text formatting syntax. You can extend it with custom syntax to include layout and other complex features.

**Use Case**: Good for simpler content where you want human-readable files with the ability to include additional metadata or custom blocks.

**Structure Example**:

````markdown
# Document Title

## Section 1

```json
{
  "type": "section",
  "styles": {
    "width": "50%",
    "height": "100vh"
  }
}

````

This is a text block.

---

## Split View

### Left Side

This is left side content.

### Right Side

This is right side content.

````

**Advantages**:
- Human-readable and easy to edit.
- Many tools and libraries support Markdown.
- Easier to integrate with existing Markdown parsers.

**Disadvantages**:
- Limited in handling complex layouts and interactions.
- Requires additional parsing logic to handle extended syntax.

### 3. **Custom XML**

**Description**: XML (eXtensible Markup Language) allows you to define custom tags and structures for representing data. It's hierarchical and can represent complex nested structures.

**Use Case**: Suitable for applications requiring a more verbose and structured approach than JSON, and where XML's strengths (like schema validation) are beneficial.

**Structure Example**:
```xml
<document>
  <section id="section-1" width="50%" height="100vh">
    <content>
      <text>This is a text block.</text>
      <image src="path/to/image.jpg"/>
    </content>
  </section>
  <split direction="horizontal">
    <section>
      <content>
        <text>Left side content.</text>
      </content>
    </section>
    <section>
      <content>
        <text>Right side content.</text>
      </content>
    </section>
  </split>
</document>

````

**Advantages**:

- Structured and allows for detailed representation of content and metadata.
- Supports namespaces and validation with schemas.

**Disadvantages**:

- More verbose and harder to read/write compared to JSON.
- Requires XML parsers and handling for reading/writing.

### 4. **HTML with Embedded Metadata**

**Description**: HTML can be used to represent content and layout directly. You can embed metadata in HTML comments or use data attributes to store additional information.

**Use Case**: Best for directly rendering content in a web application or for projects where the final output is HTML.

**Structure Example**:

```html
<div class="section" data-width="50%" data-height="100vh">
  <p>This is a text block.</p>
  <img src="path/to/image.jpg" alt="Description"/>
</div>

<div class="split" data-direction="horizontal">
  <div class="section">
    <p>Left side content.</p>
  </div>
  <div class="section">
    <p>Right side content.</p>
  </div>
</div>

```

**Advantages**:

- Directly usable in web browsers.
- Can leverage CSS for styling and layout directly.

**Disadvantages**:

- Less clean for non-HTML-based processing.
- Can become cluttered with embedded metadata.

### Choosing the Right Format

- **JSON**: Best for complex structures and integration with JavaScript-based applications. It's flexible and widely used.
- **Markdown**: Good for simpler documents where human readability is important and complex layouts are less critical.
- **Custom XML**: Useful if you need strong schema validation and detailed hierarchical data.
- **HTML**: Ideal if your primary use case involves rendering in a web browser and you want to leverage existing HTML/CSS.

Each format has its trade-offs, so your choice will depend on the specific needs of your editor and how you plan to process and render the content.

To collect the current HTML and CSS of a page in a Next.js application, you can use a combination of client-side JavaScript and server-side API routes. The general approach involves:

1. **Client-Side JavaScript**: Use JavaScript to capture the HTML and CSS of the page.
2. **API Route**: Send the captured data to a server-side API endpoint.
3. **Server-Side Handling**: Process or store the data as needed.

Here's an example implementation:

### 1. **Client-Side JavaScript**

You need to capture the current HTML and CSS of the page. You can do this in a React component or use a custom hook.

```jsx
// components/CollectPageData.js
import { useEffect } from 'react';

const CollectPageData = () => {
  useEffect(() => {
    const capturePageData = async () => {
      // Get HTML content
      const htmlContent = document.documentElement.outerHTML;

      // Get CSS content
      const cssContent = Array.from(document.styleSheets)
        .map((styleSheet) => {
          try {
            return Array.from(styleSheet.cssRules)
              .map((rule) => rule.cssText)
              .join('\\\\n');
          } catch (e) {
            console.error('Error accessing CSS rules:', e);
            return '';
          }
        })
        .join('\\\\n');

      // Send data to the server
      await fetch('/api/savePageData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ html: htmlContent, css: cssContent }),
      });
    };

    capturePageData();
  }, []);

  return null; // This component does not need to render anything
};

export default CollectPageData;

```

### 2. **API Route**

Create an API route in Next.js to handle the incoming data.

```
// pages/api/savePageData.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { html, css } = req.body;

    // Process or store the HTML and CSS data
    // For example, you might save it to a file or a database

    // Here, we simply log it to the console
    console.log('HTML Content:', html);
    console.log('CSS Content:', css);

    res.status(200).json({ message: 'Page data collected successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

```

### 3. **Include the Component in Your Page**

Add the `CollectPageData` component to the pages where you want to collect the data.

```jsx
// pages/index.js
import CollectPageData from '../components/CollectPageData';

const HomePage = () => {
  return (
    <>
      <CollectPageData />
      <h1>Welcome to the Home Page</h1>
      {/* Other content */}
    </>
  );
};

export default HomePage;

```

### Notes

- **Security Considerations**: Be cautious with capturing and sending HTML and CSS as it may include sensitive information. Ensure proper sanitization and validation on both the client and server sides.
- **Cross-Origin Stylesheets**: Some stylesheets might be blocked due to CORS policy, which could prevent you from accessing CSS rules from external stylesheets. In such cases, you might only be able to capture inline styles or stylesheets from the same origin.

This approach demonstrates a basic method for collecting HTML and CSS data. Depending on your needs, you might need additional processing or storage solutions.