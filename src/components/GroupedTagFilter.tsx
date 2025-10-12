import { useMemo } from 'react';
import TagBadge from '@/components/TagBadge';
import { organizeTagsByGroups, TAG_GROUPS, TagGroup } from '@/config/tagGroups';

interface GroupedTagFilterProps {
  allTags: string[];
  selectedTags: Set<string>;
  onTagToggle: (tag: string, selected: boolean) => void;
}

export default function GroupedTagFilter({
  allTags,
  selectedTags,
  onTagToggle,
}: GroupedTagFilterProps) {
  const { grouped, ungrouped } = useMemo(() => {
    return organizeTagsByGroups(allTags);
  }, [allTags]);

  const sortedGroups = useMemo(() => {
    return TAG_GROUPS
      .filter(group => grouped[group.id]?.length > 0)
      .sort((a, b) => a.priority - b.priority);
  }, [grouped]);

  return (
    <div className="grouped-tag-filter">
      {sortedGroups.map((group: TagGroup) => (
        <div key={group.id} className="tag-group">
          <h5 className="tag-group-label">{group.label}</h5>
          <div className={`tag-group-tags ${group.color ? `tag-group-${group.color}` : ''}`}>
            {grouped[group.id]
              .sort() // Sort tags within each group alphabetically
              .map((tag) => (
                <TagBadge
                  key={tag}
                  tag={tag}
                  variant="filter"
                  isSelected={selectedTags.has(tag)}
                  onClick={onTagToggle}
                />
              ))}
          </div>
        </div>
      ))}
      
      {ungrouped.length > 0 && (
        <div className="tag-group">
          <h5 className="tag-group-label">Other</h5>
          <div className="tag-group-tags">
            {ungrouped
              .sort()
              .map((tag) => (
                <TagBadge
                  key={tag}
                  tag={tag}
                  variant="filter"
                  isSelected={selectedTags.has(tag)}
                  onClick={onTagToggle}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}