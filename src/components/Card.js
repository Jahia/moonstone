import React from 'react'; // we need this to make JSX compile
export const Card = ({ title, paragraph }) => React.createElement("aside", null,
    React.createElement("h2", null, title),
    React.createElement("p", null, paragraph));
const el = React.createElement(Card, { title: "Welcome!", paragraph: "To this example" });
//# sourceMappingURL=Card.js.map