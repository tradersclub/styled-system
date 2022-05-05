<p align="center">
  <a href="https://styled-system.com/" rel="noopener" target="_blank"><img src="https://tc.com.br/wp-content/themes/tradersclub/img/tc-out.png" alt="TC Logo"></a></p>
</p>
<h1 align="center">styled-system</h1>

<div align="center">
TradersClub Frontend Styled System Helper.
</div>

## Installation

1. **Create a Github Token to Auth in NPM:**

- Access [Github Tokens](https://github.com/settings/tokens);
- Generate a new token with **repo** and **write:packages** scopes;
- Save the token to use in the next step.

2. **Auth in NPM with your personal Github Account:**

```
npm login --scope=@tradersclub --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN *
> Email: PUBLIC-EMAIL-ADDRESS

* TOKEN: Paste the previously created token;
```

**3. Add Registry**

- Create or update `.npmrc` file with: `@tradersclub:registry=https://npm.pkg.github.com`

**4. Add @tradersclub/styled-system**

- Add `@tradersclub/styled-system` using Yarn with `yarn add @tradersclub/styled-system` or NPM with `npm install @tradersclub/styled-system`

**5. Add styled-components**

- Add `styled-components` using Yarn with `yarn add styled-components` or NPM with `npm install styled-components`

- If you use `typescript` consider using `@types/styled-components` in Yarn with `yarn add -D @types/styled-components` or NPM with `npm install --save-dev @types/styled-components`

## Usage

**1. Import any parser on your styled-components**

```tsx
import { margin } from '@tradersclub/styled-system';

expost const Container = styled.div`
  ${margin}
`;
```

**2. You can use it with your theme definitions (and responsivity if necessary).**

```tsx
// With default value
<Container marginX="spacing4">Hello, world</Container>

// With breakpoints theme key value
<Container marginX={{ default: "spacing4", md: "spacing16" }}>Hello, world</Container>
```
