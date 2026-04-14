"use strict";(self.webpackChunk_jswork_react_list_docs=self.webpackChunk_jswork_react_list_docs||[]).push([[904],{14815:function(i,n,e){e.r(n),e.d(n,{ReactList:function(){return p},SELF:function(){return m},default:function(){return f},getKey:function(){return o},isSlotConfig:function(){return u},renderSlot:function(){return l}});var a=e(75271),I=Object.defineProperty,c=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,r=(t,d,s)=>d in t?I(t,d,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[d]=s,v=(t,d)=>{for(var s in d||(d={}))L.call(d,s)&&r(t,s,d[s]);if(c)for(var s of c(d))y.call(d,s)&&r(t,s,d[s]);return t},h=(t,d)=>I(t,"name",{value:d,configurable:!0}),m=Symbol("react-list/self");function u(t){return t&&typeof t=="object"&&"component"in t}h(u,"isSlotConfig");function l(t,d,s){return t?typeof t=="function"?a.createElement(t,s?v({key:s},d):d):u(t)?a.createElement(t.component,v(v({key:s},t.props),d)):s!==void 0?a.createElement(a.Fragment,{key:s},t):t:null}h(l,"renderSlot");function o(t,d,s,g){if(typeof g=="function")return g({item:t,index:d,data:s});if(g===m)return t;let E=g.split("."),x=t;for(let b of E)x=x==null?void 0:x[b];return x!=null?x:d}h(o,"getKey");function p({data:t,keyExtractor:d="id",slots:s}){let g=(0,a.useMemo)(()=>t.map((E,x)=>o(E,x,t,d)),[t,d]);return t.length===0?a.createElement(a.Fragment,null,l(s.empty,{data:t})):a.createElement(a.Fragment,null,t.map((E,x)=>l(s.item,{item:E,index:x,data:t},g[x])))}h(p,"ReactList");var f=p},76517:function(i,n,e){e.r(n),e.d(n,{demos:function(){return I}});var a=e(75271),I={}},73296:function(i,n,e){e.r(n),e.d(n,{demos:function(){return I}});var a=e(75271),I={}},72612:function(i,n,e){e.r(n),e.d(n,{demos:function(){return I}});var a=e(75271),I={}},34748:function(i,n,e){e.r(n),e.d(n,{demos:function(){return I}});var a=e(75271),I={}},27890:function(i,n,e){e.r(n),e.d(n,{demos:function(){return I}});var a=e(75271),I={}},60358:function(i,n,e){var a;e.r(n),e.d(n,{demos:function(){return h}});var I=e(90228),c=e.n(I),L=e(87999),y=e.n(L),r=e(75271),v=e(14815),h={"docs-playground-demo-basic":{component:r.memo(r.lazy(function(){return e.e(433).then(e.bind(e,22181))})),asset:{type:"BLOCK",id:"docs-playground-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(58669).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-list":{type:"NPM",value:"2.0.7"}},entry:"index.tsx",title:"Basic List"},context:{react:a||(a=e.t(r,2)),"@jswork/react-list":v},renderOpts:{compile:function(){var m=y()(c()().mark(function l(){var o,p=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(631).then(e.bind(e,10631));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,p));case 3:case"end":return t.stop()}},l)}));function u(){return m.apply(this,arguments)}return u}()}},"docs-playground-demo-empty-state":{component:r.memo(r.lazy(function(){return e.e(433).then(e.bind(e,92540))})),asset:{type:"BLOCK",id:"docs-playground-demo-empty-state",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(88229).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-list":{type:"NPM",value:"2.0.7"}},entry:"index.tsx",title:"Empty State"},context:{react:a||(a=e.t(r,2)),"@jswork/react-list":v},renderOpts:{compile:function(){var m=y()(c()().mark(function l(){var o,p=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(631).then(e.bind(e,10631));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,p));case 3:case"end":return t.stop()}},l)}));function u(){return m.apply(this,arguments)}return u}()}},"docs-playground-demo-custom-key":{component:r.memo(r.lazy(function(){return e.e(433).then(e.bind(e,47892))})),asset:{type:"BLOCK",id:"docs-playground-demo-custom-key",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96520).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-list":{type:"NPM",value:"2.0.7"}},entry:"index.tsx",title:"Custom Key Extractor"},context:{react:a||(a=e.t(r,2)),"@jswork/react-list":v},renderOpts:{compile:function(){var m=y()(c()().mark(function l(){var o,p=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(631).then(e.bind(e,10631));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,p));case 3:case"end":return t.stop()}},l)}));function u(){return m.apply(this,arguments)}return u}()}},"docs-playground-demo-self-key":{component:r.memo(r.lazy(function(){return e.e(433).then(e.bind(e,91901))})),asset:{type:"BLOCK",id:"docs-playground-demo-self-key",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(55499).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-list":{type:"NPM",value:"2.0.7"}},entry:"index.tsx",title:"SELF Key"},context:{react:a||(a=e.t(r,2)),"@jswork/react-list":v},renderOpts:{compile:function(){var m=y()(c()().mark(function l(){var o,p=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(631).then(e.bind(e,10631));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,p));case 3:case"end":return t.stop()}},l)}));function u(){return m.apply(this,arguments)}return u}()}},"docs-playground-demo-dot-path":{component:r.memo(r.lazy(function(){return e.e(433).then(e.bind(e,46875))})),asset:{type:"BLOCK",id:"docs-playground-demo-dot-path",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(19639).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-list":{type:"NPM",value:"2.0.7"}},entry:"index.tsx",title:"Dot Path Key"},context:{react:a||(a=e.t(r,2)),"@jswork/react-list":v},renderOpts:{compile:function(){var m=y()(c()().mark(function l(){var o,p=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(631).then(e.bind(e,10631));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,p));case 3:case"end":return t.stop()}},l)}));function u(){return m.apply(this,arguments)}return u}()}},"docs-playground-demo-slot-props":{component:r.memo(r.lazy(function(){return e.e(433).then(e.bind(e,84434))})),asset:{type:"BLOCK",id:"docs-playground-demo-slot-props",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65634).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-list":{type:"NPM",value:"2.0.7"}},entry:"index.tsx",title:"Slot with Default Props"},context:{react:a||(a=e.t(r,2)),"@jswork/react-list":v},renderOpts:{compile:function(){var m=y()(c()().mark(function l(){var o,p=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(631).then(e.bind(e,10631));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,p));case 3:case"end":return t.stop()}},l)}));function u(){return m.apply(this,arguments)}return u}()}},"docs-playground-demo-interactive":{component:r.memo(r.lazy(function(){return e.e(433).then(e.bind(e,91128))})),asset:{type:"BLOCK",id:"docs-playground-demo-interactive",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91627).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-list":{type:"NPM",value:"2.0.7"}},entry:"index.tsx",title:"Interactive List"},context:{react:a||(a=e.t(r,2)),"@jswork/react-list":v},renderOpts:{compile:function(){var m=y()(c()().mark(function l(){var o,p=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(631).then(e.bind(e,10631));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,p));case 3:case"end":return t.stop()}},l)}));function u(){return m.apply(this,arguments)}return u}()}}}},57069:function(i,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"A highly abstract, type-safe list component for React with slot-based architecture.",paraId:0,tocIndex:0},{value:"Render lists of any data type with full TypeScript support",paraId:1,tocIndex:1},{value:"Need flexible rendering control via a slot system",paraId:1,tocIndex:1},{value:"Want to separate data logic from presentation",paraId:1,tocIndex:1},{value:"Handle empty states elegantly",paraId:1,tocIndex:1},{value:"Build custom list UIs without opinionated styling",paraId:1,tocIndex:1},{value:`npm install -S @jswork/react-list
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
  keyExtractor={({ item, index }) => \`user-\${item.id}-\${index}\`}
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
`,paraId:8,tocIndex:9},{value:"Property",paraId:9,tocIndex:10},{value:"Required",paraId:9,tocIndex:10},{value:"Type",paraId:9,tocIndex:10},{value:"Default",paraId:9,tocIndex:10},{value:"Description",paraId:9,tocIndex:10},{value:"data",paraId:9,tocIndex:10},{value:"Yes",paraId:9,tocIndex:10},{value:"T[]",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"Array of data items to render",paraId:9,tocIndex:10},{value:"keyExtractor",paraId:9,tocIndex:10},{value:"No",paraId:9,tocIndex:10},{value:"typeof SELF | keyof T | string | ((ctx: ItemContext) => Key)",paraId:9,tocIndex:10},{value:'"id"',paraId:9,tocIndex:10},{value:"Property key, dot path, SELF, or function for unique keys",paraId:9,tocIndex:10},{value:"slots",paraId:9,tocIndex:10},{value:"Yes",paraId:9,tocIndex:10},{value:"{ item: Slot; empty?: Slot }",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"Slot configuration for rendering",paraId:9,tocIndex:10},{value:"Prop",paraId:10,tocIndex:11},{value:"Type",paraId:10,tocIndex:11},{value:"Description",paraId:10,tocIndex:11},{value:"item",paraId:10,tocIndex:11},{value:"T",paraId:10,tocIndex:11},{value:"The current data item",paraId:10,tocIndex:11},{value:"index",paraId:10,tocIndex:11},{value:"number",paraId:10,tocIndex:11},{value:"Index of the item in the array",paraId:10,tocIndex:11},{value:"data",paraId:10,tocIndex:11},{value:"T[]",paraId:10,tocIndex:11},{value:"The full data array",paraId:10,tocIndex:11},{value:"Prop",paraId:11,tocIndex:12},{value:"Type",paraId:11,tocIndex:12},{value:"Description",paraId:11,tocIndex:12},{value:"data",paraId:11,tocIndex:12},{value:"T[]",paraId:11,tocIndex:12},{value:"The empty data array",paraId:11,tocIndex:12},{value:"keyExtractor",paraId:12,tocIndex:13},{value:" defaults to ",paraId:12,tocIndex:13},{value:'"id"',paraId:12,tocIndex:13},{value:" - Only specify when your key field differs",paraId:12,tocIndex:13},{value:"Use property keys when possible",paraId:12,tocIndex:13},{value:" - ",paraId:12,tocIndex:13},{value:'keyExtractor="id"',paraId:12,tocIndex:13},{value:" is simpler than a function",paraId:12,tocIndex:13},{value:"Leverage generics",paraId:12,tocIndex:13},{value:" - The type parameter ensures type safety",paraId:12,tocIndex:13},{value:"Use slots for default props",paraId:12,tocIndex:13},{value:" - Pass common props via slot configuration",paraId:12,tocIndex:13},{value:"Memoize item components",paraId:12,tocIndex:13},{value:" - Wrap item components with ",paraId:12,tocIndex:13},{value:"React.memo",paraId:12,tocIndex:13},{value:" for performance",paraId:12,tocIndex:13},{value:"Handle empty states",paraId:12,tocIndex:13},{value:" - Always provide an empty slot for better UX",paraId:12,tocIndex:13}]},61567:function(i,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"Complete API documentation for the ",paraId:0,tocIndex:0},{value:"@jswork/react-list",paraId:0,tocIndex:0},{value:" package.",paraId:0,tocIndex:0},{value:"Export",paraId:1,tocIndex:1},{value:"Type",paraId:1,tocIndex:1},{value:"Description",paraId:1,tocIndex:1},{value:"ReactList",paraId:1,tocIndex:1},{value:"Component",paraId:1,tocIndex:1},{value:"The main list component",paraId:1,tocIndex:1},{value:"ReactListProps",paraId:1,tocIndex:1},{value:"Interface",paraId:1,tocIndex:1},{value:"Props interface for the component",paraId:1,tocIndex:1},{value:"Slot",paraId:1,tocIndex:1},{value:"Type",paraId:1,tocIndex:1},{value:"Slot type definition",paraId:1,tocIndex:1},{value:"SELF",paraId:1,tocIndex:1},{value:"Symbol",paraId:1,tocIndex:1},{value:"Use item itself as key (for primitive arrays)",paraId:1,tocIndex:1},{value:"KeyExtractor",paraId:1,tocIndex:1},{value:"Type",paraId:1,tocIndex:1},{value:"Key extractor type definition",paraId:1,tocIndex:1},{value:"ItemContext",paraId:1,tocIndex:1},{value:"Type",paraId:1,tocIndex:1},{value:"Shared context type ",paraId:1,tocIndex:1},{value:"{ item, index, data }",paraId:1,tocIndex:1},{value:`export type ItemContext<T> = {
  item: T;
  index: number;
  data: T[];
};

interface ReactListProps<T> {
  data: T[];
  keyExtractor?:
    | typeof SELF
    | keyof T
    | string
    | ((ctx: ItemContext<T>) => string | number); // default: "id"
  slots: {
    item: Slot<ItemContext<T>>;
    empty?: Slot<{ data: T[] }>;
  };
}
`,paraId:2,tocIndex:2},{value:"Property",paraId:3,tocIndex:3},{value:"Required",paraId:3,tocIndex:3},{value:"Type",paraId:3,tocIndex:3},{value:"Description",paraId:3,tocIndex:3},{value:"data",paraId:3,tocIndex:3},{value:"Yes",paraId:3,tocIndex:3},{value:"T[]",paraId:3,tocIndex:3},{value:"Array of data items to render",paraId:3,tocIndex:3},{value:"keyExtractor",paraId:3,tocIndex:3},{value:"No",paraId:3,tocIndex:3},{value:"typeof SELF | keyof T | string | ((ctx: ItemContext<T>) => string | number)",paraId:3,tocIndex:3},{value:"Determines the unique key for each item (default: ",paraId:3,tocIndex:3},{value:'"id"',paraId:3,tocIndex:3},{value:")",paraId:3,tocIndex:3},{value:"slots",paraId:3,tocIndex:3},{value:"Yes",paraId:3,tocIndex:3},{value:"{ item: Slot<...>; empty?: Slot<...> }",paraId:3,tocIndex:3},{value:"Slot configuration for rendering",paraId:3,tocIndex:3},{value:"The item slot receives the following props:",paraId:4,tocIndex:4},{value:"Prop",paraId:5,tocIndex:4},{value:"Type",paraId:5,tocIndex:4},{value:"Description",paraId:5,tocIndex:4},{value:"item",paraId:5,tocIndex:4},{value:"T",paraId:5,tocIndex:4},{value:"The current data item",paraId:5,tocIndex:4},{value:"index",paraId:5,tocIndex:4},{value:"number",paraId:5,tocIndex:4},{value:"The index of the item in the array",paraId:5,tocIndex:4},{value:"data",paraId:5,tocIndex:4},{value:"T[]",paraId:5,tocIndex:4},{value:"The full data array",paraId:5,tocIndex:4},{value:"The empty slot receives the following props:",paraId:6,tocIndex:5},{value:"Prop",paraId:7,tocIndex:5},{value:"Type",paraId:7,tocIndex:5},{value:"Description",paraId:7,tocIndex:5},{value:"data",paraId:7,tocIndex:5},{value:"T[]",paraId:7,tocIndex:5},{value:"The empty data array (always ",paraId:7,tocIndex:5},{value:"[]",paraId:7,tocIndex:5},{value:")",paraId:7,tocIndex:5},{value:"A ",paraId:8,tocIndex:6},{value:"Slot<P>",paraId:8,tocIndex:6},{value:" can be any of the following:",paraId:8,tocIndex:6},{value:"Pass a component directly:",paraId:9,tocIndex:7},{value:`const MyItem = ({ item, index }: { item: User; index: number }) => (
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
`,paraId:18,tocIndex:12},{value:"Use a dot-separated path to extract keys from nested objects:",paraId:19,tocIndex:13},{value:`// Deep nested key extraction
<ReactList
  data={users}
  keyExtractor="profile.address.city"
  slots={...}
/>
`,paraId:20,tocIndex:13},{value:"Use the ",paraId:21,tocIndex:14},{value:"SELF",paraId:21,tocIndex:14},{value:" symbol when items are primitive values (strings, numbers):",paraId:21,tocIndex:14},{value:`import { ReactList, SELF } from '@jswork/react-list';

<ReactList
  data={['apple', 'banana', 'cherry']}
  keyExtractor={SELF}
  slots={{
    item: ({ item }) => <div>{item}</div>,
  }}
/>;
`,paraId:22,tocIndex:14},{value:"Use a function for complex key generation:",paraId:23,tocIndex:15},{value:`<ReactList
  data={users}
  keyExtractor={({ item, index }) => \`user-\${item.id}-\${index}\`}
  slots={...}
/>
`,paraId:24,tocIndex:15},{value:"ReactList uses TypeScript generics for full type safety:",paraId:25,tocIndex:16},{value:`// T is inferred from data
const users: User[] = [...];
<ReactList data={users} keyExtractor="id" slots={{
  item: ({ item }) => {
    // item is typed as User
    return <div>{item.name}</div>;
  }
}} />
`,paraId:26,tocIndex:16}]},33154:function(i,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"Learn how to install and use ReactList in your project.",paraId:0,tocIndex:0},{value:`# npm
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
`,paraId:5,tocIndex:5},{value:"Slots are the core abstraction of ReactList. A slot can be:",paraId:6,tocIndex:7},{value:"A React component",paraId:7,tocIndex:7},{value:" - ",paraId:7,tocIndex:7},{value:"slots={{ item: MyComponent }}",paraId:7,tocIndex:7},{value:"A React node",paraId:7,tocIndex:7},{value:" - ",paraId:7,tocIndex:7},{value:"slots={{ item: <div>Hello</div> }}",paraId:7,tocIndex:7},{value:"A component with default props",paraId:7,tocIndex:7},{value:" - ",paraId:7,tocIndex:7},{value:"slots={{ item: { component: MyComponent, props: { className: 'item' } } }}",paraId:7,tocIndex:7},{value:"ReactList requires a ",paraId:8,tocIndex:8},{value:"keyExtractor",paraId:8,tocIndex:8},{value:" for React reconciliation (defaults to ",paraId:8,tocIndex:8},{value:'"id"',paraId:8,tocIndex:8},{value:"). You can use:",paraId:8,tocIndex:8},{value:"A property key",paraId:9,tocIndex:8},{value:": ",paraId:9,tocIndex:8},{value:'keyExtractor="id"',paraId:9,tocIndex:8},{value:" - simple and concise",paraId:9,tocIndex:8},{value:"A dot path",paraId:9,tocIndex:8},{value:": ",paraId:9,tocIndex:8},{value:'keyExtractor="profile.address.city"',paraId:9,tocIndex:8},{value:" - extract nested keys",paraId:9,tocIndex:8},{value:"SELF symbol",paraId:9,tocIndex:8},{value:": ",paraId:9,tocIndex:8},{value:"keyExtractor={SELF}",paraId:9,tocIndex:8},{value:" - use item itself as key for primitive arrays",paraId:9,tocIndex:8},{value:"A custom function",paraId:9,tocIndex:8},{value:": ",paraId:9,tocIndex:8},{value:"keyExtractor={({ item, index }) => \\",paraId:9,tocIndex:8},{value:"user-${item.id}`}",paraId:9,tocIndex:8},{value:"- full control, receives",paraId:9,tocIndex:8},{value:"ItemContext` object",paraId:9,tocIndex:8},{value:"Provide an ",paraId:10,tocIndex:9},{value:"empty",paraId:10,tocIndex:9},{value:" slot to handle empty data:",paraId:10,tocIndex:9},{value:`<ReactList
  data={users}
  keyExtractor="id"
  slots={{
    item: ItemView,
    empty: () => <div>No users found</div>,
  }}
/>
`,paraId:11,tocIndex:9},{value:"API Reference",paraId:12,tocIndex:10},{value:" - Full component API documentation",paraId:13,tocIndex:10},{value:"Playground",paraId:14,tocIndex:10},{value:" - Interactive examples and demos",paraId:13,tocIndex:10}]},95523:function(i,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"Welcome to the ReactList guide. ReactList is a lightweight, performant list component that separates data from presentation through a flexible slot system.",paraId:0,tocIndex:0},{value:"Getting Started",paraId:1,tocIndex:1},{value:" - Installation and basic usage",paraId:2,tocIndex:1},{value:"API Reference",paraId:3,tocIndex:1},{value:" - Component props and slot types",paraId:2,tocIndex:1},{value:"Live Demo",paraId:4,tocIndex:2},{value:"GitHub Repository",paraId:4,tocIndex:2},{value:"npm Package",paraId:4,tocIndex:2}]},39972:function(i,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:`# npm
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
`,paraId:1,tocIndex:1},{value:"Getting Started",paraId:2,tocIndex:2},{value:" - Installation and basic usage",paraId:3,tocIndex:2},{value:"API Reference",paraId:4,tocIndex:2},{value:" - Full component API documentation",paraId:3,tocIndex:2},{value:"Playground",paraId:5,tocIndex:2},{value:" - Interactive examples and demos",paraId:3,tocIndex:2},{value:"Live Demo",paraId:3,tocIndex:2},{value:" - See it in action",paraId:3,tocIndex:2}]},15895:function(i,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"Explore interactive demos of ReactList with live code examples.",paraId:0,tocIndex:0},{value:"The simplest way to render a list of items:",paraId:1,tocIndex:1},{value:"Handle the case when data is empty:",paraId:2,tocIndex:3},{value:"Use a function for complex key generation:",paraId:3,tocIndex:5},{value:"Use the ",paraId:4,tocIndex:7},{value:"SELF",paraId:4,tocIndex:7},{value:" symbol for primitive arrays where each item is its own key:",paraId:4,tocIndex:7},{value:"Use a dot-separated path to extract keys from nested objects:",paraId:5,tocIndex:9},{value:"Pass default props to item components via slot configuration:",paraId:6,tocIndex:11},{value:"A fully interactive list with add/remove functionality:",paraId:7,tocIndex:13}]},58669:function(i,n){n.Z=`import React from 'react';
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
      <h3 className="mb-3">Team Members</h3>
      <ReactList
        data={users}
        keyExtractor="id"
        slots={{
          item: ({ item }) => (
            <div className="flex justify-between px-3 py-2 border-b border-gray-100">
              <span className="font-medium">{item.name}</span>
              <span className="text-gray-400">{item.role}</span>
            </div>
          ),
        }}
      />
    </div>
  );
};
`},96520:function(i,n){n.Z=`import React from 'react';
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
      <h3 className="mb-3">Product List (Custom Keys)</h3>
      <p className="text-gray-500 text-sm mb-3">
        Keys are generated using a custom function to handle duplicate SKUs.
      </p>
      <ReactList
        data={products}
        keyExtractor={({ item, index }) => \`\${item.sku}-\${index}\`}
        slots={{
          item: ({ item }) => (
            <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
              <span>
                <strong>{item.name}</strong>
                <span className="text-gray-400 ml-2 text-xs">
                  SKU: {item.sku}
                </span>
              </span>
              <span className="text-green-500 font-medium">
                \${item.price}
              </span>
            </div>
          ),
        }}
      />
    </div>
  );
};
`},19639:function(i,n){n.Z=`import React from 'react';
import { ReactList } from '@jswork/react-list';

interface User {
  id: number;
  name: string;
  profile: {
    address: {
      city: string;
    };
  };
}

const users: User[] = [
  { id: 1, name: 'Alice', profile: { address: { city: 'Beijing' } } },
  { id: 2, name: 'Bob', profile: { address: { city: 'Shanghai' } } },
  { id: 3, name: 'Charlie', profile: { address: { city: 'Shenzhen' } } },
];

export default () => {
  return (
    <div>
      <h3 className="mb-3">Nested Key (Dot Path)</h3>
      <p className="text-gray-500 text-sm mb-3">
        Use a dot-separated path to extract keys from nested objects, e.g.{' '}
        <code>profile.address.city</code>.
      </p>
      <ReactList
        data={users}
        keyExtractor="profile.address.city"
        slots={{
          item: ({ item }) => (
            <div className="flex justify-between px-3 py-2 border-b border-gray-100">
              <span className="font-medium">{item.name}</span>
              <span className="text-gray-400">{item.profile.address.city}</span>
            </div>
          ),
        }}
      />
    </div>
  );
};
`},88229:function(i,n){n.Z=`import React, { useState } from 'react';
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
      <h3 className="mb-3">Empty State Demo</h3>
      <div className="flex gap-2 mb-3">
        <button
          onClick={handleAdd}
          className="px-4 py-1.5 bg-blue-500 text-white border-none rounded cursor-pointer"
        >
          Add User
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-1.5 bg-red-500 text-white border-none rounded cursor-pointer"
        >
          Clear All
        </button>
      </div>
      <ReactList
        data={users}
        keyExtractor="id"
        slots={{
          item: ({ item }) => (
            <div className="px-3 py-2 border-b border-gray-100">
              {item.name}
            </div>
          ),
          empty: () => (
            <div className="p-6 text-center text-gray-400 bg-gray-50 rounded">
              No users found. Click &quot;Add User&quot; to get started.
            </div>
          ),
        }}
      />
    </div>
  );
};
`},91627:function(i,n){n.Z=`import React, { useState } from 'react';
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
      <h3 className="mb-3">Interactive User List</h3>
      <button
        onClick={handleAdd}
        className="px-4 py-1.5 mb-3 bg-blue-500 text-white border-none rounded cursor-pointer"
      >
        Add Random User
      </button>
      <ReactList
        data={users}
        keyExtractor="id"
        slots={{
          item: ({ item }) => (
            <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
              <span>{item.name}</span>
              <button
                onClick={() => handleRemove(item.id)}
                className="px-3 py-1 bg-red-500 text-white border-none rounded cursor-pointer text-xs"
              >
                Remove
              </button>
            </div>
          ),
          empty: () => (
            <div className="p-6 text-center text-gray-400 bg-gray-50 rounded">
              No users left. Click &quot;Add Random User&quot; to add one.
            </div>
          ),
        }}
      />
    </div>
  );
};
`},55499:function(i,n){n.Z=`import React from 'react';
import { ReactList, SELF } from '@jswork/react-list';

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

export default () => {
  return (
    <div>
      <h3 className="mb-3">Primitive Array (SELF Key)</h3>
      <p className="text-gray-500 text-sm mb-3">
        Use <code>SELF</code> symbol when rendering arrays of strings or numbers.
        Each item is used as its own key.
      </p>
      <ReactList
        data={fruits}
        keyExtractor={SELF}
        slots={{
          item: ({ item }) => (
            <div className="px-3 py-2 border-b border-gray-100">
              {item}
            </div>
          ),
        }}
      />
    </div>
  );
};
`},65634:function(i,n){n.Z=`import React from 'react';
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
    className={\`flex items-center gap-2 px-3 py-2 border-b border-gray-100 \${variant === 'compact' ? 'bg-gray-50' : 'bg-transparent'}\`}
  >
    <input type="checkbox" defaultChecked={item.done} />
    <span className={item.done ? 'line-through' : ''}>{item.title}</span>
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
      <h3 className="mb-3">Slot with Default Props</h3>
      <p className="text-gray-500 text-sm mb-3">
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
