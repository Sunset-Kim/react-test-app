# Test

## count app 구현

### 사용한 query

- getByTestId
  dom 요소에 'data-testid' 라는 attribute를 설정해 선택하는 방법.

```jsx
// button.jsx
<button data-testid='button'>+</button>;

// button.test.js
const buttonElement = screen.getByTestId("button");
```

### 사용한 매쳐

- toHaveTextContent
- toHaveStyle
- toBeDisabled
- toBeEnabled
