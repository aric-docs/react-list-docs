"use strict";(self.webpackChunk_jswork_react_list_docs=self.webpackChunk_jswork_react_list_docs||[]).push([[935],{70652:function(l,s,e){e.r(s);var o=e(93629),c=e(20555),u=e(95869),t=e(26169),r=e(64353),d=e(75353),i=e(19282),v=e(32369),p=e(37647),a=e(37585),m=e(73270),h=e(75271),n=e(39972),_=e(52676);function x(){return(0,_.jsx)(a.dY,{children:(0,_.jsx)(h.Suspense,{fallback:(0,_.jsx)(m.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"installation",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Installation"]}),(0,_.jsx)(d.Z,{lang:"bash",children:n.texts[0].value}),(0,_.jsxs)("h2",{id:"quick-start",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#quick-start",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Quick Start"]}),(0,_.jsx)(d.Z,{lang:"tsx",children:n.texts[1].value}),(0,_.jsxs)("h2",{id:"documentation",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#documentation",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Documentation"]}),(0,_.jsxs)("ul",{children:[(0,_.jsxs)("li",{children:[(0,_.jsx)(a.rU,{to:"/guide/getting-started",children:n.texts[2].value}),n.texts[3].value]}),(0,_.jsxs)("li",{children:[(0,_.jsx)(a.rU,{to:"/components",children:n.texts[4].value}),n.texts[5].value]}),(0,_.jsxs)("li",{children:[(0,_.jsx)(a.rU,{to:"/playground",children:n.texts[6].value}),n.texts[7].value]}),(0,_.jsxs)("li",{children:[(0,_.jsx)("a",{href:"https://afeiship.github.io/react-list/",children:n.texts[8].value}),n.texts[9].value]})]})]})})})})}s.default=x},37647:function(l,s,e){var o=e(52676);function c(t){var r=t.title,d=t.className,i=t.children;return _jsxs("article",{className:"p-6 bg-white rounded-xl shadow-md border ".concat(d||""),children:[_jsx("h3",{className:"text-lg font-bold mb-3",children:r}),i]})}var u=null},39972:function(l,s,e){e.r(s),e.d(s,{texts:function(){return o}});const o=[{value:`# npm
npm install -S @jswork/react-list

# yarn
yarn add @jswork/react-list

# pnpm
pnpm add @jswork/react-list
`,paraId:0,tocIndex:0},{value:`import { ReactList } from '@jswork/react-list';

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

function App() {
  return (
    <ReactList
      data={users}
      keyExtractor="id"
      slots={{
        item: ({ item }) => <div>{item.name}</div>,
      }}
    />
  );
}
`,paraId:1,tocIndex:1},{value:"Getting Started",paraId:2,tocIndex:2},{value:" - Installation and basic usage",paraId:3,tocIndex:2},{value:"API Reference",paraId:4,tocIndex:2},{value:" - Full component API documentation",paraId:3,tocIndex:2},{value:"Playground",paraId:5,tocIndex:2},{value:" - Interactive examples and demos",paraId:3,tocIndex:2},{value:"Live Demo",paraId:3,tocIndex:2},{value:" - See it in action",paraId:3,tocIndex:2}]}}]);
