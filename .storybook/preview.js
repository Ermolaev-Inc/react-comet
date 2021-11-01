// Support of styled-components
// https://storybook.js.org/docs/react/writing-stories/decorators
//import { ThemeProvider } from "styled-components";
// export const decorators = [
//   (Story) => {
//     return (
//       <ThemeProvider
//         theme=""
//       >
//         <Story />
//       </ThemeProvider>
//     );
//   },
// ];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
