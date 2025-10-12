# Resource Tagging System

This document explains how to use and contribute to the Virtual Coffee resource tagging system.

## Overview

The resource tagging system allows filtering and categorization of MDX resources using content tags. Resources can be filtered by tags like 'beginner', 'javascript', 'career', 'open-source', etc.

## Adding Tags to Resources

### Frontmatter Tags

Add tags to your MDX files using the `contentTags` field in the frontmatter:

```yaml
---
meta:
  title: Your Resource Title
  description: Your resource description
contentTags:
  - beginner
  - javascript
  - guide
  - career
order: 1
---
```

### Tag Groups and Categories

Tags are automatically organized into predefined groups for better user experience. When adding tags, choose from existing categories when possible:

Use consistent, lowercase tags following these categories:

#### Skill Level
- `beginner` - For newcomers to development
- `intermediate` - For developers with some experience  
- `advanced` - For experienced developers

#### Technologies
- `javascript` - JavaScript-related content
- `typescript` - TypeScript-related content
- `react` - React framework content
- `node` - Node.js backend content
- `css` - CSS and styling content
- `html` - HTML markup content
- `python` - Python programming content
- `java` - Java programming content

#### Topics
- `career` - Career development and advice
- `open-source` - Open source contribution guides
- `accessibility` - Web accessibility topics
- `testing` - Testing methodologies and tools
- `deployment` - Deployment and DevOps
- `database` - Database-related content
- `api` - API development and consumption

#### Content Type
- `guide` - Step-by-step tutorials
- `tips` - Quick tips and tricks
- `reference` - Reference material
- `examples` - Code examples and demos
- `tools` - Development tools and utilities

#### Community
- `virtual-coffee` - Virtual Coffee specific content
- `community` - General community resources
- `mentoring` - Mentoring and learning resources

## Using the Tag Filtering System

### FileIndex Component with Tag Filtering

Simply add the `showTagFilter` prop to the existing `FileIndex` component:

```jsx
import FileIndex from '@/components/content/FileIndex';

<FileIndex subDirectory="resources" depth={2} showTagFilter={true} />
```

### Customization Options

```jsx
<FileIndex 
  subDirectory="resources" 
  depth={2} 
  showTagFilter={true}
  tagFilterTitle="Browse by Category"
  className="custom-styling"
/>
```

### TagBadge Component

Display individual tags:

```jsx
import TagBadge from '@/components/TagBadge';

<TagBadge tag="beginner" variant="default" size="sm" />
<TagBadge tag="javascript" variant="filter" isSelected={true} onClick={handleTagClick} />
```

### TagList Component

Display multiple tags:

```jsx
import TagList from '@/components/TagList';

<TagList
  tags={['beginner', 'javascript', 'guide']}
  variant="default"
  size="sm"
  maxTags={3}
  onTagClick={handleTagClick}
/>
```

## Component Props

### FileIndex Props (Enhanced)
- `subDirectory?: string` - Subdirectory to load resources from
- `depth?: number` - Maximum nesting depth for resources
- `showTagFilter?: boolean` - Whether to show tag filtering interface (default: false)
- `tagFilterTitle?: string` - Title for the tag filter section (default: "Filter by Tags")
- `className?: string` - Additional CSS classes

### TagBadge Props
- `tag: string` - Tag text to display
- `isSelected?: boolean` - Whether tag is selected (for filters)
- `onClick?: (tag: string, selected: boolean) => void` - Click handler
- `variant?: 'default' | 'filter'` - Visual style variant
- `size?: 'sm' | 'md'` - Size variant
- `disabled?: boolean` - Whether tag is disabled

### TagList Props
- `tags: string[]` - Array of tag strings
- `variant?: 'default' | 'filter'` - Visual style variant
- `size?: 'sm' | 'md'` - Size variant
- `maxTags?: number` - Maximum number of tags to display
- `className?: string` - Additional CSS classes
- `onTagClick?: (tag: string) => void` - Click handler for individual tags

## Tag Grouping System

The site automatically groups tags into logical categories for better filtering:

1. **Skill Level** (displayed first): `beginner`, `intermediate`, `advanced`
2. **Content Type**: `guide`, `tutorial`, `tips`, `reference`, `examples`
3. **Technology**: `javascript`, `typescript`, `react`, `node`, `css`, `html`, `python`, `java`, `git`
4. **Topics**: `career`, `interviewing`, `open-source`, `accessibility`, `testing`, `deployment`, `database`, `api`
5. **Community**: `virtual-coffee`, `community`, `mentoring`

Any tags not in these predefined groups will appear in an "Other" section.

## Best Practices

### Tag Consistency
1. Use lowercase tags consistently
2. Keep tags short and descriptive
3. Prefer existing grouped tags over creating new ones
4. If you must create a new tag, consider if it fits into an existing group category

### Content Organization
1. Add 2-5 relevant tags per resource
2. Include at least one skill level tag (`beginner`, `intermediate`, `advanced`)
3. Include relevant technology tags
4. Include content type tags (`guide`, `tips`, `reference`)

### Tag Examples

#### Good Examples
```yaml
contentTags:
  - beginner
  - javascript
  - guide
  - career
```

```yaml
contentTags:
  - intermediate
  - react
  - typescript
  - examples
```

#### Avoid
```yaml
contentTags:
  - Very-Specific-Framework-v2.1.3  # Too specific
  - BEGINNER  # Use lowercase
  - js  # Use full names
```

## Styling

The tag filtering system uses SCSS and follows the existing Bootstrap-like design system. Key CSS classes:

- `.tag-badge` - Base tag styling
- `.resource-tag-filter` - Main filter container
- `.tag-list` - Tag list container

## Contributing

When adding new content with tags:

1. Follow the recommended tag categories
2. Use consistent lowercase naming
3. Test the filtering functionality
4. Update this documentation if adding new tag categories

For questions about the tagging system, reach out in the Virtual Coffee community!