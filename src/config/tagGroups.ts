export interface TagGroup {
  id: string;
  label: string;
  tags: string[];
  priority: number; // Lower numbers appear first
  color?: string; // Optional visual grouping
}

export const TAG_GROUPS: TagGroup[] = [
  {
    id: 'skill-level',
    label: 'Skill Level',
    tags: ['beginner', 'intermediate', 'advanced'],
    priority: 1,
    color: 'blue'
  },
  {
    id: 'content-type',
    label: 'Content Type',
    tags: ['guide', 'tutorial', 'tips', 'reference', 'examples'],
    priority: 2,
    color: 'green'
  },
  {
    id: 'technology',
    label: 'Technology',
    tags: ['javascript', 'typescript', 'react', 'node', 'css', 'html', 'python', 'java', 'git'],
    priority: 3,
    color: 'purple'
  },
  {
    id: 'topics',
    label: 'Topics',
    tags: ['career', 'interviewing', 'open-source', 'accessibility', 'testing', 'deployment', 'database', 'api'],
    priority: 4,
    color: 'orange'
  },
  {
    id: 'community',
    label: 'Community',
    tags: ['virtual-coffee', 'community', 'mentoring'],
    priority: 5,
    color: 'pink'
  }
];

// Helper function to get group for a tag
export function getTagGroup(tag: string): TagGroup | undefined {
  return TAG_GROUPS.find(group => group.tags.includes(tag));
}

// Helper function to organize tags by groups
export function organizeTagsByGroups(tags: string[]): { grouped: Record<string, string[]>, ungrouped: string[] } {
  const grouped: Record<string, string[]> = {};
  const ungrouped: string[] = [];

  // Initialize groups
  TAG_GROUPS.forEach(group => {
    grouped[group.id] = [];
  });

  // Sort tags into groups
  tags.forEach(tag => {
    const group = getTagGroup(tag);
    if (group) {
      grouped[group.id].push(tag);
    } else {
      ungrouped.push(tag);
    }
  });

  // Remove empty groups
  Object.keys(grouped).forEach(groupId => {
    if (grouped[groupId].length === 0) {
      delete grouped[groupId];
    }
  });

  return { grouped, ungrouped };
}