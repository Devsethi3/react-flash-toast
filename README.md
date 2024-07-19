A versatile and customizable toast notification library for React with seamless integration and a variety of notification styles.

## Installation

Install the package using npm:

```bash
npm install react-flash-toast
```

Or using yarn:

```bash
yarn add react-flash-toast
```

## Usage

### 1. Wrap your app with ToastProvider

First, wrap your main application component with the `ToastProvider`:

```jsx
import { ToastProvider } from "react-flash-toast";

const App = () => {
  return (
    <ToastProvider>
      <YourAppContent />
    </ToastProvider>
  );
};
```

By default, toasts will appear in the `top-center` position. You can override this using the `defaultPosition` prop:

```jsx
<ToastProvider defaultPosition="top-right">
  <YourAppContent />
</ToastProvider>
```

Available positions are:
- "top-left"
- "top-center"
- "top-right"
- "bottom-left"
- "bottom-center"
- "bottom-right"

### 2. Use the toast function

Import the `toast` function in any component where you want to trigger a toast notification:

```jsx
import { toast } from 'react-flash-toast'

const ToastDemo = () => {
  const displayCustomToast = () => {
    toast({
      title: "Welcome Back!",
      description: "You have successfully logged in.",
      duration: 3000,
      type: "info",
      content: (
        <>
          <p>Enjoy the new features and enhancements.</p>
          <a href="/upgrade" style={{ color: "#00ffae", fontWeight: "bold" }}>
            Upgrade to Pro
          </a>
        </>
      ),
      style: {
        background: "#1e90ff",
        color: "#fff",
        border: "1px solid #00ffae",
        borderRadius: "8px",
        padding: "16px",
      },
    });
  };

  return (
    <button onClick={displayCustomToast}>
      Show Custom Toast
    </button>
  )
}

```

## Toast Options

The `toast` function accepts an object with the following properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | string | - | The main title of the toast notification. |
| `description` | string | - | A brief description or additional information. |
| `content` | React.ReactNode | - | Custom content to be rendered within the toast. |
| `type` | string | "success" | Predefined toast types: "success", "error", "info", "warning", "default". |
| `duration` | number | 3000 | Time in milliseconds for which the toast will be displayed. |
| `style` | object | - | Custom styles to be applied to the toast container. |

## Examples

### Basic Success Toast

```jsx
toast({
  title: "Success!",
  description: "Your action was completed successfully.",
  type: "success",
});
```

### Error Toast with Custom Duration

```jsx
toast({
  title: "Error",
  description: "Something went wrong. Please try again.",
  type: "error",
  duration: 5000, // 5 seconds
});
```

### Info Toast with Custom Styling

```jsx
toast({
  title: "Did you know?",
  description: "You can customize the appearance of these toasts!",
  type: "info",
  style: {
    background: "linear-gradient(to right, #00c6ff, #0072ff)",
    color: "white",
    borderRadius: "10px",
  },
});
```

### Custom Content Toast

```jsx
toast({
  type: "default",
  content: (
    <div>
      <h3>Custom Content</h3>
      <p>You can add any React components here!</p>
      <button onClick={() => console.log("Button clicked!")}>Click me</button>
    </div>
  ),
});
```

### Toast with Custom Position

```jsx
toast({
  title: "Custom Position",
  description: "This toast appears in a specific position.",
  type: "info",
  position: "bottom-right",
});
```

## Customizing Default Behavior

You can customize the default behavior of all toasts by passing props to the `ToastProvider`:

```jsx
<ToastProvider 
  defaultPosition="bottom-center"
>
  <YourAppContent />
</ToastProvider>
```

This sets all toasts to appear at the bottom-center position by default, unless overridden in individual toast calls.

## Accessibility

React Flash Toast is designed with accessibility in mind:
- Toasts are announced to screen readers.
- Keyboard navigation is supported for dismissing toasts.
- Color contrasts meet WCAG 2.1 guidelines.

## Browser Support

React Flash Toast supports all modern browsers and Internet Explorer 11+.

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

React Flash Toast is [MIT licensed](LICENSE).

## Conclusion

React Flash Toast provides a flexible and easy-to-use solution for adding toast notifications to your React applications. With its customizable options and straightforward API, you can quickly implement attractive and informative notifications that enhance your user experience.

For more information, issues, or feature requests, please visit our [GitHub repository](https://github.com/yourusername/react-flash-toast).
