# Tag Filtering Integration Example

## Current Resources Index

The current `src/content/resources/index.mdx` file uses:

```jsx
<FileIndex subDirectory="resources" depth={2} />
```

## Updated with Tag Filtering

Simply add the `showTagFilter` prop to enable tag filtering:

```jsx
<FileIndex subDirectory="resources" depth={2} showTagFilter={true} />
```

## Complete Updated File

Here's what the updated `src/content/resources/index.mdx` should look like:

```mdx
---
meta:
  title: Virtual Coffee Resources
  description: A collection of resources we provide for our members and all developers.
hero:
  Hero: UndrawFolder
  heroHeader: Virtual Coffee Resources
tags:
  - memberresources
  - topnav
order: 1
---

import LeadText from '@/components/content/LeadText';
import TextContainer from '@/components/content/TextContainer';
import FileIndex from '@/components/content/FileIndex';

<TextContainer background="light" showBackToTopLink={false}>

<LeadText>

We compile and provide guides and resources for Virtual Coffee's members as community documentation in the **Virtual Coffee Handbook**. We also have resources for all developers that live in **Developer Resources**. Feel free to check them out!

</LeadText>

</TextContainer>

<TextContainer showBackToTopLink={false}>

## Resources Available:

<FileIndex subDirectory="resources" depth={2} showTagFilter={true} />

</TextContainer>
```

## Additional Customization Options

You can customize the tag filter appearance and behavior:

```jsx
<FileIndex 
  subDirectory="resources" 
  depth={2} 
  showTagFilter={true}
  tagFilterTitle="Browse by Category"
  className="my-custom-styling"
/>
```

### Available FileIndex Props:
- `subDirectory?: string` - Subdirectory to load resources from
- `depth?: number` - Maximum nesting depth for resources  
- `showTagFilter?: boolean` - Whether to show tag filtering interface (default: false)
- `tagFilterTitle?: string` - Title for the tag filter section (default: "Filter by Tags")
- `className?: string` - Additional CSS classes

## Adding Tags to Individual Resources

Ensure your resource files have proper tags:

```yaml
---
meta:
  title: Your Resource Title
  description: Resource description
contentTags:
  - beginner
  - javascript
  - guide
order: 1
---
```

## Features Included

✅ **Tag Filtering Interface** - Interactive tag selection
✅ **Multi-tag Support** - Select multiple tags simultaneously  
✅ **Resource Count Display** - Shows filtered vs total resources
✅ **Clear All Functionality** - Easy reset of all filters
✅ **Responsive Design** - Works on mobile and desktop
✅ **Accessibility** - ARIA labels and keyboard navigation
✅ **Empty State Handling** - Helpful message when no results
✅ **Existing UI Consistency** - Matches Bootstrap-like design system