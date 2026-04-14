---
title: Playground
order: 1
---

# Playground

Explore interactive demos of ReactList with live code examples.

## Basic Usage

The simplest way to render a list of items:

<code src="./demos/basic.tsx">Basic List</code>

## Empty State

Handle the case when data is empty:

<code src="./demos/empty-state.tsx">Empty State</code>

## Custom Key Extractor

Use a function for complex key generation:

<code src="./demos/custom-key.tsx">Custom Key Extractor</code>

## SELF Key (Primitive Arrays)

Use the `SELF` symbol for primitive arrays where each item is its own key:

<code src="./demos/self-key.tsx">SELF Key</code>

## Dot Path (Nested Keys)

Use a dot-separated path to extract keys from nested objects:

<code src="./demos/dot-path.tsx">Dot Path Key</code>

## Slot with Props

Pass default props to item components via slot configuration:

<code src="./demos/slot-props.tsx">Slot with Default Props</code>

## Interactive List

A fully interactive list with add/remove functionality:

<code src="./demos/interactive.tsx">Interactive List</code>
