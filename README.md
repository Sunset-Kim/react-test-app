# Test

## 0. 연습: count app 구현

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

## 1. 더 나은 테스트를 위해 알아야 할 것

### Query 사용 우선순위

> [공식문서 Priority](https://testing-library.com/docs/queries/about#priority)

1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue

6. getByAltText
7. getByTitle

8. getByTestId

### fireEvent vs userEvent

> userEvent는 fireEvent를 사용해서 만들어졌습니다.
> userEvent는 각각의 엘리먼트 타입에 따라 더욱 적절한 반응을 보여줍니다
> 예를 들어 버튼을 fireEvent로 click 하면 focus가 되지 않지만, userEvent는 focust가 됩니다.
