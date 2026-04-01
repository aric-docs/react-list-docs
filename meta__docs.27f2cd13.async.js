"use strict";(self.webpackChunk_jswork_react_list_docs=self.webpackChunk_jswork_react_list_docs||[]).push([[904],{85190:function(i,t,e){e.r(t),e.d(t,{ReactList:function(){return s},default:function(){return I}});var a=e(75271),l=Object.defineProperty,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,d=(r,n,o)=>n in r?l(r,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[n]=o,v=(r,n)=>{for(var o in n||(n={}))h.call(n,o)&&d(r,o,n[o]);if(c)for(var o of c(n))x.call(n,o)&&d(r,o,n[o]);return r},f=(r,n)=>l(r,"name",{value:n,configurable:!0});function p(r){return r&&typeof r=="object"&&"component"in r}f(p,"isSlotConfig");function u(r,n,o){return r?typeof r=="function"?a.createElement(r,o?v({key:o},n):n):p(r)?a.createElement(r.component,v(v({key:o},r.props),n)):o!==void 0?a.createElement(a.Fragment,{key:o},r):r:null}f(u,"renderSlot");function m(r,n,o){var y;return typeof o=="function"?o(r,n):(y=r[o])!=null?y:n}f(m,"getKey");function s({data:r,keyExtractor:n,slots:o}){let y=(0,a.useMemo)(()=>r.map((R,g)=>m(R,g,n)),[r,n]);return r.length===0?a.createElement(a.Fragment,null,u(o.empty,{data:r})):a.createElement(a.Fragment,null,r.map((R,g)=>u(o.item,{item:R,index:g,data:r},y[g])))}f(s,"ReactList");var I=s},76517:function(i,t,e){e.r(t),e.d(t,{demos:function(){return l}});var a=e(75271),l={}},73296:function(i,t,e){e.r(t),e.d(t,{demos:function(){return l}});var a=e(75271),l={}},72612:function(i,t,e){e.r(t),e.d(t,{demos:function(){return l}});var a=e(75271),l={}},34748:function(i,t,e){e.r(t),e.d(t,{demos:function(){return l}});var a=e(75271),l={}},27890:function(i,t,e){e.r(t),e.d(t,{demos:function(){return l}});var a=e(75271),l={}},60358:function(i,t,e){var a;e.r(t),e.d(t,{demos:function(){return f}});var l=e(90228),c=e.n(l),h=e(87999),x=e.n(h),d=e(75271),v=e(85190),f={"docs-playground-demo-basic":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,22181))})),asset:{type:"BLOCK",id:"docs-playground-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(58669).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-list":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Basic List"},context:{react:a||(a=e.t(d,2)),"@jswork/react-list":v},renderOpts:{compile:function(){var p=x()(c()().mark(function m(){var s,I=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(631).then(e.bind(e,10631));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,I));case 3:case"end":return n.stop()}},m)}));function u(){return p.apply(this,arguments)}return u}()}},"docs-playground-demo-empty-state":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,92540))})),asset:{type:"BLOCK",id:"docs-playground-demo-empty-state",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(88229).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-list":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Empty State"},context:{react:a||(a=e.t(d,2)),"@jswork/react-list":v},renderOpts:{compile:function(){var p=x()(c()().mark(function m(){var s,I=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(631).then(e.bind(e,10631));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,I));case 3:case"end":return n.stop()}},m)}));function u(){return p.apply(this,arguments)}return u}()}},"docs-playground-demo-custom-key":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,47892))})),asset:{type:"BLOCK",id:"docs-playground-demo-custom-key",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96520).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-list":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Custom Key Extractor"},context:{react:a||(a=e.t(d,2)),"@jswork/react-list":v},renderOpts:{compile:function(){var p=x()(c()().mark(function m(){var s,I=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(631).then(e.bind(e,10631));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,I));case 3:case"end":return n.stop()}},m)}));function u(){return p.apply(this,arguments)}return u}()}},"docs-playground-demo-slot-props":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,84434))})),asset:{type:"BLOCK",id:"docs-playground-demo-slot-props",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65634).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-list":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Slot with Default Props"},context:{react:a||(a=e.t(d,2)),"@jswork/react-list":v},renderOpts:{compile:function(){var p=x()(c()().mark(function m(){var s,I=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(631).then(e.bind(e,10631));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,I));case 3:case"end":return n.stop()}},m)}));function u(){return p.apply(this,arguments)}return u}()}},"docs-playground-demo-interactive":{component:d.memo(d.lazy(function(){return e.e(433).then(e.bind(e,91128))})),asset:{type:"BLOCK",id:"docs-playground-demo-interactive",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91627).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-list":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Interactive List"},context:{react:a||(a=e.t(d,2)),"@jswork/react-list":v},renderOpts:{compile:function(){var p=x()(c()().mark(function m(){var s,I=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(631).then(e.bind(e,10631));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,I));case 3:case"end":return n.stop()}},m)}));function u(){return p.apply(this,arguments)}return u}()}}}},57069:function(i,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"A highly abstract, type-safe list component for React with slot-based architecture.",paraId:0,tocIndex:0},{value:"Render lists of any data type with full TypeScript support",paraId:1,tocIndex:1},{value:"Need flexible rendering control via a slot system",paraId:1,tocIndex:1},{value:"Want to separate data logic from presentation",paraId:1,tocIndex:1},{value:"Handle empty states elegantly",paraId:1,tocIndex:1},{value:"Build custom list UIs without opinionated styling",paraId:1,tocIndex:1},{value:`npm install -S @jswork/react-list
`,paraId:2,tocIndex:2},{value:`import { ReactList } from '@jswork/react-list';

interface User {
  id: number;
  name: string;
}

const ItemView = ({ item }: { item: User }) => <div>{item.name}</div>;

function App() {
  const users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  return (
    <ReactList data={users} keyExtractor="id" slots={{ item: ItemView }} />
  );
}
`,paraId:3,tocIndex:4},{value:`const EmptyView = () => <div>No users found</div>;

<ReactList
  data={users}
  keyExtractor="id"
  slots={{
    item: ItemView,
    empty: EmptyView,
  }}
/>;
`,paraId:4,tocIndex:5},{value:`<ReactList
  data={users}
  keyExtractor={(item, index) => \`user-\${item.id}-\${index}\`}
  slots={{ item: ItemView }}
/>
`,paraId:5,tocIndex:6},{value:`const slots = {
  item: {
    component: ItemView,
    props: { className: 'list-item', variant: 'compact' },
  },
};

<ReactList data={users} keyExtractor="id" slots={slots} />;
`,paraId:6,tocIndex:7},{value:`<ReactList
  data={users}
  keyExtractor="id"
  slots={{
    item: ({ item }) => <div className="user">{item.name}</div>,
  }}
/>
`,paraId:7,tocIndex:8},{value:`function UserList() {
  const [users, setUsers] = useState(initialUsers);

  const handleRemove = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <ReactList
      data={users}
      keyExtractor="id"
      slots={{
        item: (props) => <UserItem {...props} onRemove={handleRemove} />,
        empty: () => <div>No users left</div>,
      }}
    />
  );
}
`,paraId:8,tocIndex:9},{value:"Property",paraId:9,tocIndex:10},{value:"Required",paraId:9,tocIndex:10},{value:"Type",paraId:9,tocIndex:10},{value:"Default",paraId:9,tocIndex:10},{value:"Description",paraId:9,tocIndex:10},{value:"data",paraId:9,tocIndex:10},{value:"Yes",paraId:9,tocIndex:10},{value:"T[]",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"Array of data items to render",paraId:9,tocIndex:10},{value:"keyExtractor",paraId:9,tocIndex:10},{value:"Yes",paraId:9,tocIndex:10},{value:"keyof T | ((item: T, index: number) => string | number)",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"Property key or function for unique keys",paraId:9,tocIndex:10},{value:"slots",paraId:9,tocIndex:10},{value:"Yes",paraId:9,tocIndex:10},{value:"{ item: Slot<...>; empty?: Slot<...> }",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"Slot configuration for rendering",paraId:9,tocIndex:10},{value:"Prop",paraId:10,tocIndex:11},{value:"Type",paraId:10,tocIndex:11},{value:"Description",paraId:10,tocIndex:11},{value:"item",paraId:10,tocIndex:11},{value:"T",paraId:10,tocIndex:11},{value:"The current data item",paraId:10,tocIndex:11},{value:"index",paraId:10,tocIndex:11},{value:"number",paraId:10,tocIndex:11},{value:"Index of the item in the array",paraId:10,tocIndex:11},{value:"data",paraId:10,tocIndex:11},{value:"T[]",paraId:10,tocIndex:11},{value:"The full data array",paraId:10,tocIndex:11},{value:"Prop",paraId:11,tocIndex:12},{value:"Type",paraId:11,tocIndex:12},{value:"Description",paraId:11,tocIndex:12},{value:"data",paraId:11,tocIndex:12},{value:"T[]",paraId:11,tocIndex:12},{value:"The empty data array",paraId:11,tocIndex:12},{value:"Always provide ",paraId:12,tocIndex:13},{value:"keyExtractor",paraId:12,tocIndex:13},{value:" - Required for React reconciliation",paraId:12,tocIndex:13},{value:"Use property keys when possible",paraId:12,tocIndex:13},{value:" - ",paraId:12,tocIndex:13},{value:'keyExtractor="id"',paraId:12,tocIndex:13},{value:" is simpler than a function",paraId:12,tocIndex:13},{value:"Leverage generics",paraId:12,tocIndex:13},{value:" - The ",paraId:12,tocIndex:13},{value:"<T>",paraId:12,tocIndex:13},{value:" type parameter ensures type safety",paraId:12,tocIndex:13},{value:"Use slots for default props",paraId:12,tocIndex:13},{value:" - Pass common props via slot configuration",paraId:12,tocIndex:13},{value:"Memoize item components",paraId:12,tocIndex:13},{value:" - Wrap item components with ",paraId:12,tocIndex:13},{value:"React.memo",paraId:12,tocIndex:13},{value:" for performance",paraId:12,tocIndex:13},{value:"Handle empty states",paraId:12,tocIndex:13},{value:" - Always provide an empty slot for better UX",paraId:12,tocIndex:13}]},61567:function(i,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"Complete API documentation for the ",paraId:0,tocIndex:0},{value:"@jswork/react-list",paraId:0,tocIndex:0},{value:" package.",paraId:0,tocIndex:0},{value:"Export",paraId:1,tocIndex:1},{value:"Type",paraId:1,tocIndex:1},{value:"Description",paraId:1,tocIndex:1},{value:"ReactList",paraId:1,tocIndex:1},{value:"Component",paraId:1,tocIndex:1},{value:"The main list component",paraId:1,tocIndex:1},{value:"ReactListProps",paraId:1,tocIndex:1},{value:"Interface",paraId:1,tocIndex:1},{value:"Props interface for the component",paraId:1,tocIndex:1},{value:"Slot",paraId:1,tocIndex:1},{value:"Type",paraId:1,tocIndex:1},{value:"Slot type definition",paraId:1,tocIndex:1},{value:`interface ReactListProps<T> {
  data: T[];
  keyExtractor: keyof T | ((item: T, index: number) => string | number);
  slots: {
    item: Slot<{ item: T; index: number; data: T[] }>;
    empty?: Slot<{ data: T[] }>;
  };
}
`,paraId:2,tocIndex:2},{value:"Property",paraId:3,tocIndex:3},{value:"Required",paraId:3,tocIndex:3},{value:"Type",paraId:3,tocIndex:3},{value:"Description",paraId:3,tocIndex:3},{value:"data",paraId:3,tocIndex:3},{value:"Yes",paraId:3,tocIndex:3},{value:"T[]",paraId:3,tocIndex:3},{value:"Array of data items to render",paraId:3,tocIndex:3},{value:"keyExtractor",paraId:3,tocIndex:3},{value:"Yes",paraId:3,tocIndex:3},{value:"keyof T | ((item: T, index: number) => string | number)",paraId:3,tocIndex:3},{value:"Determines the unique key for each item",paraId:3,tocIndex:3},{value:"slots",paraId:3,tocIndex:3},{value:"Yes",paraId:3,tocIndex:3},{value:"{ item: Slot<...>; empty?: Slot<...> }",paraId:3,tocIndex:3},{value:"Slot configuration for rendering",paraId:3,tocIndex:3},{value:"The item slot receives the following props:",paraId:4,tocIndex:4},{value:"Prop",paraId:5,tocIndex:4},{value:"Type",paraId:5,tocIndex:4},{value:"Description",paraId:5,tocIndex:4},{value:"item",paraId:5,tocIndex:4},{value:"T",paraId:5,tocIndex:4},{value:"The current data item",paraId:5,tocIndex:4},{value:"index",paraId:5,tocIndex:4},{value:"number",paraId:5,tocIndex:4},{value:"The index of the item in the array",paraId:5,tocIndex:4},{value:"data",paraId:5,tocIndex:4},{value:"T[]",paraId:5,tocIndex:4},{value:"The full data array",paraId:5,tocIndex:4},{value:"The empty slot receives the following props:",paraId:6,tocIndex:5},{value:"Prop",paraId:7,tocIndex:5},{value:"Type",paraId:7,tocIndex:5},{value:"Description",paraId:7,tocIndex:5},{value:"data",paraId:7,tocIndex:5},{value:"T[]",paraId:7,tocIndex:5},{value:"The empty data array (always ",paraId:7,tocIndex:5},{value:"[]",paraId:7,tocIndex:5},{value:")",paraId:7,tocIndex:5},{value:"A ",paraId:8,tocIndex:6},{value:"Slot<P>",paraId:8,tocIndex:6},{value:" can be any of the following:",paraId:8,tocIndex:6},{value:"Pass a component directly:",paraId:9,tocIndex:7},{value:`const MyItem = ({ item, index }: { item: User; index: number }) => (
  <div>{item.name}</div>
);

slots={{ item: MyItem }}
`,paraId:10,tocIndex:7},{value:"Pass an inline render function:",paraId:11,tocIndex:8},{value:`slots={{
  item: ({ item }) => <div>{item.name}</div>
}}
`,paraId:12,tocIndex:8},{value:"Pass a pre-built React node:",paraId:13,tocIndex:9},{value:`slots={{ item: <div>Static content</div> }}
`,paraId:14,tocIndex:9},{value:"Pass an object with ",paraId:15,tocIndex:10},{value:"component",paraId:15,tocIndex:10},{value:" and ",paraId:15,tocIndex:10},{value:"props",paraId:15,tocIndex:10},{value:":",paraId:15,tocIndex:10},{value:`slots={{
  item: {
    component: ItemView,
    props: { className: 'list-item', variant: 'compact' }
  }
}}
`,paraId:16,tocIndex:10},{value:"Use a property name when items have a unique identifier:",paraId:17,tocIndex:12},{value:`// Use string property key
<ReactList data={users} keyExtractor="id" slots={...} />
`,paraId:18,tocIndex:12},{value:"Use a function for complex key generation:",paraId:19,tocIndex:13},{value:`<ReactList
  data={users}
  keyExtractor={(item, index) => \`user-\${item.id}-\${index}\`}
  slots={...}
/>
`,paraId:20,tocIndex:13},{value:"ReactList uses TypeScript generics for full type safety:",paraId:21,tocIndex:14},{value:`// T is inferred from data
const users: User[] = [...];
<ReactList data={users} keyExtractor="id" slots={{
  item: ({ item }) => {
    // item is typed as User
    return <div>{item.name}</div>;
  }
}} />
`,paraId:22,tocIndex:14}]},33154:function(i,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"Learn how to install and use ReactList in your project.",paraId:0,tocIndex:0},{value:`# npm
npm install -S @jswork/react-list

# yarn
yarn add @jswork/react-list

# pnpm
pnpm add @jswork/react-list
`,paraId:1,tocIndex:1},{value:"ReactList uses TypeScript generics for full type safety. First, define your data interface:",paraId:2,tocIndex:3},{value:`interface User {
  id: number;
  name: string;
  email: string;
}
`,paraId:3,tocIndex:3},{value:`const ItemView = ({ item }: { item: User }) => (
  <div className="user-item">
    <span>{item.name}</span>
    <span>{item.email}</span>
  </div>
);
`,paraId:4,tocIndex:4},{value:`import { ReactList } from '@jswork/react-list';

function App() {
  const users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
  ];

  return (
    <ReactList data={users} keyExtractor="id" slots={{ item: ItemView }} />
  );
}
`,paraId:5,tocIndex:5},{value:"Slots are the core abstraction of ReactList. A slot can be:",paraId:6,tocIndex:7},{value:"A React component",paraId:7,tocIndex:7},{value:" - ",paraId:7,tocIndex:7},{value:"slots={{ item: MyComponent }}",paraId:7,tocIndex:7},{value:"A React node",paraId:7,tocIndex:7},{value:" - ",paraId:7,tocIndex:7},{value:"slots={{ item: <div>Hello</div> }}",paraId:7,tocIndex:7},{value:"A component with default props",paraId:7,tocIndex:7},{value:" - ",paraId:7,tocIndex:7},{value:"slots={{ item: { component: MyComponent, props: { className: 'item' } } }}",paraId:7,tocIndex:7},{value:"ReactList requires a ",paraId:8,tocIndex:8},{value:"keyExtractor",paraId:8,tocIndex:8},{value:" for React reconciliation. You can use:",paraId:8,tocIndex:8},{value:"A property key",paraId:9,tocIndex:8},{value:": ",paraId:9,tocIndex:8},{value:'keyExtractor="id"',paraId:9,tocIndex:8},{value:" - simple and concise",paraId:9,tocIndex:8},{value:"A custom function",paraId:9,tocIndex:8},{value:": ",paraId:9,tocIndex:8},{value:"keyExtractor={(item, index) => \\",paraId:9,tocIndex:8},{value:"user-${item.id}`}` - full control",paraId:9,tocIndex:8},{value:"Provide an ",paraId:10,tocIndex:9},{value:"empty",paraId:10,tocIndex:9},{value:" slot to handle empty data:",paraId:10,tocIndex:9},{value:`<ReactList
  data={users}
  keyExtractor="id"
  slots={{
    item: ItemView,
    empty: () => <div>No users found</div>,
  }}
/>
`,paraId:11,tocIndex:9},{value:"API Reference",paraId:12,tocIndex:10},{value:" - Full component API documentation",paraId:13,tocIndex:10},{value:"Playground",paraId:14,tocIndex:10},{value:" - Interactive examples and demos",paraId:13,tocIndex:10}]},95523:function(i,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"Welcome to the ReactList guide. ReactList is a lightweight, performant list component that separates data from presentation through a flexible slot system.",paraId:0,tocIndex:0},{value:"Getting Started",paraId:1,tocIndex:1},{value:" - Installation and basic usage",paraId:2,tocIndex:1},{value:"API Reference",paraId:3,tocIndex:1},{value:" - Component props and slot types",paraId:2,tocIndex:1},{value:"Live Demo",paraId:4,tocIndex:2},{value:"GitHub Repository",paraId:4,tocIndex:2},{value:"npm Package",paraId:4,tocIndex:2}]},39972:function(i,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:`# npm
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
`,paraId:1,tocIndex:1},{value:"Getting Started",paraId:2,tocIndex:2},{value:" - Installation and basic usage",paraId:3,tocIndex:2},{value:"API Reference",paraId:4,tocIndex:2},{value:" - Full component API documentation",paraId:3,tocIndex:2},{value:"Playground",paraId:5,tocIndex:2},{value:" - Interactive examples and demos",paraId:3,tocIndex:2},{value:"Live Demo",paraId:3,tocIndex:2},{value:" - See it in action",paraId:3,tocIndex:2}]},15895:function(i,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"Explore interactive demos of ReactList with live code examples.",paraId:0,tocIndex:0},{value:"The simplest way to render a list of items:",paraId:1,tocIndex:1},{value:"Handle the case when data is empty:",paraId:2,tocIndex:3},{value:"Use a function for complex key generation:",paraId:3,tocIndex:5},{value:"Pass default props to item components via slot configuration:",paraId:4,tocIndex:7},{value:"A fully interactive list with add/remove functionality:",paraId:5,tocIndex:9}]},58669:function(i,t){t.Z=`import React from 'react';
import { ReactList } from '@jswork/react-list';

interface User {
  id: number;
  name: string;
  role: string;
}

const users: User[] = [
  { id: 1, name: 'Alice', role: 'Engineer' },
  { id: 2, name: 'Bob', role: 'Designer' },
  { id: 3, name: 'Charlie', role: 'PM' },
];

export default () => {
  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Team Members</h3>
      <ReactList
        data={users}
        keyExtractor="id"
        slots={{
          item: ({ item }) => (
            <div
              style={{
                padding: '8px 12px',
                borderBottom: '1px solid #f0f0f0',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontWeight: 500 }}>{item.name}</span>
              <span style={{ color: '#888' }}>{item.role}</span>
            </div>
          ),
        }}
      />
    </div>
  );
};
`},96520:function(i,t){t.Z=`import React from 'react';
import { ReactList } from '@jswork/react-list';

interface Product {
  sku: string;
  name: string;
  price: number;
}

const products: Product[] = [
  { sku: 'A001', name: 'Laptop', price: 999 },
  { sku: 'B002', name: 'Mouse', price: 29 },
  { sku: 'A001', name: 'Laptop Stand', price: 49 },
];

export default () => {
  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Product List (Custom Keys)</h3>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 12 }}>
        Keys are generated using a custom function to handle duplicate SKUs.
      </p>
      <ReactList
        data={products}
        keyExtractor={(item, index) => \`\${item.sku}-\${index}\`}
        slots={{
          item: ({ item, index }) => (
            <div
              style={{
                padding: '8px 12px',
                borderBottom: '1px solid #f0f0f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>
                <strong>{item.name}</strong>
                <span style={{ color: '#888', marginLeft: 8, fontSize: 12 }}>
                  SKU: {item.sku}
                </span>
              </span>
              <span style={{ color: '#52c41a', fontWeight: 500 }}>
                \${item.price}
              </span>
            </div>
          ),
        }}
      />
    </div>
  );
};
`},88229:function(i,t){t.Z=`import React, { useState } from 'react';
import { ReactList } from '@jswork/react-list';

interface User {
  id: number;
  name: string;
}

const initialUsers: User[] = [];

export default () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleAdd = () => {
    setUsers((prev) => [
      ...prev,
      { id: Date.now(), name: \`User \${prev.length + 1}\` },
    ]);
  };

  const handleClear = () => {
    setUsers([]);
  };

  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Empty State Demo</h3>
      <div style={{ marginBottom: 12, display: 'flex', gap: 8 }}>
        <button
          onClick={handleAdd}
          style={{
            padding: '6px 16px',
            background: '#1890ff',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Add User
        </button>
        <button
          onClick={handleClear}
          style={{
            padding: '6px 16px',
            background: '#ff4d4f',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Clear All
        </button>
      </div>
      <ReactList
        data={users}
        keyExtractor="id"
        slots={{
          item: ({ item }) => (
            <div style={{ padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
              {item.name}
            </div>
          ),
          empty: () => (
            <div
              style={{
                padding: 24,
                textAlign: 'center',
                color: '#999',
                background: '#fafafa',
                borderRadius: 4,
              }}
            >
              No users found. Click "Add User" to get started.
            </div>
          ),
        }}
      />
    </div>
  );
};
`},91627:function(i,t){t.Z=`import React, { useState } from 'react';
import { ReactList } from '@jswork/react-list';

interface User {
  id: number;
  name: string;
}

const initialUsers: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

export default () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleRemove = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleAdd = () => {
    const names = ['Dave', 'Eve', 'Frank', 'Grace', 'Hank'];
    const name = names[Math.floor(Math.random() * names.length)];
    setUsers((prev) => [...prev, { id: Date.now(), name }]);
  };

  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Interactive User List</h3>
      <button
        onClick={handleAdd}
        style={{
          padding: '6px 16px',
          marginBottom: 12,
          background: '#1890ff',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
        }}
      >
        Add Random User
      </button>
      <ReactList
        data={users}
        keyExtractor="id"
        slots={{
          item: ({ item }) => (
            <div
              style={{
                padding: '8px 12px',
                borderBottom: '1px solid #f0f0f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>{item.name}</span>
              <button
                onClick={() => handleRemove(item.id)}
                style={{
                  padding: '4px 12px',
                  background: '#ff4d4f',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontSize: 12,
                }}
              >
                Remove
              </button>
            </div>
          ),
          empty: () => (
            <div
              style={{
                padding: 24,
                textAlign: 'center',
                color: '#999',
                background: '#fafafa',
                borderRadius: 4,
              }}
            >
              No users left. Click "Add Random User" to add one.
            </div>
          ),
        }}
      />
    </div>
  );
};
`},65634:function(i,t){t.Z=`import React from 'react';
import { ReactList } from '@jswork/react-list';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

const ItemView = ({
  item,
  variant,
}: {
  item: Task;
  variant?: string;
}) => (
  <div
    style={{
      padding: '8px 12px',
      borderBottom: '1px solid #f0f0f0',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: variant === 'compact' ? '#fafafa' : 'transparent',
    }}
  >
    <input type="checkbox" defaultChecked={item.done} />
    <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
      {item.title}
    </span>
  </div>
);

const tasks: Task[] = [
  { id: 1, title: 'Setup project', done: true },
  { id: 2, title: 'Write tests', done: false },
  { id: 3, title: 'Deploy to production', done: false },
];

export default () => {
  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Slot with Default Props</h3>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 12 }}>
        The <code>variant</code> prop is passed via slot configuration, not the data.
      </p>
      <ReactList
        data={tasks}
        keyExtractor="id"
        slots={{
          item: {
            component: ItemView,
            props: { variant: 'compact' },
          },
        }}
      />
    </div>
  );
};
`}}]);
