/**
 * Tag categories configuration for organizing tags into logical groups
 */

export interface TagCategory {
	id: string;
	name: string;
	description?: string;
	tags: string[];
	color?: string;
}

export interface TagGrouping {
	categories: TagCategory[];
	uncategorizedTags: string[];
}

/**
 * Predefined tag categories as specified
 */
export const TAG_CATEGORIES: TagCategory[] = [
	{
		id: 'skill-level',
		name: 'Skill Level',
		description: 'Experience level required for the resource',
		tags: ['beginner', 'intermediate', 'advanced'],
		color: '#e74c3c', // Red
	},
	{
		id: 'technologies',
		name: 'Technologies',
		description: 'Programming languages, frameworks, and tools',
		tags: ['javascript', 'typescript', 'react', 'node', 'css', 'html', 'git'],
		color: '#3498db', // Blue
	},
	{
		id: 'topics',
		name: 'Topics',
		description: 'Subject areas and domains',
		tags: ['career', 'open-source', 'testing', 'deployment', 'interviewing'],
		color: '#2ecc71', // Green
	},
	{
		id: 'format',
		name: 'Format',
		description: 'Type of content or learning material',
		tags: ['tutorial', 'reference', 'guide', 'tips'],
		color: '#f39c12', // Orange
	},
];

/**
 * Organizes tags into categories and identifies uncategorized tags
 * @param allTags - Array of all available tags
 * @returns TagGrouping with categorized and uncategorized tags
 */
export function organizeTagsByCategories(allTags: string[]): TagGrouping {
	const categorizedTags = new Set<string>();
	const categories: TagCategory[] = [];

	TAG_CATEGORIES.forEach((category) => {
		const availableTags = category.tags.filter((tag) => allTags.includes(tag));

		if (availableTags.length > 0) {
			categories.push({
				...category,
				tags: availableTags,
			});
			availableTags.forEach((tag) => categorizedTags.add(tag));
		}
	});

	const uncategorizedTags = allTags
		.filter((tag) => !categorizedTags.has(tag))
		.sort();

	return {
		categories,
		uncategorizedTags,
	};
}

/**
 * Gets the category for a specific tag
 * @param tag - The tag to find the category for
 * @returns The category ID if found, null otherwise
 */
export function getTagCategory(tag: string): string | null {
	for (const category of TAG_CATEGORIES) {
		if (category.tags.includes(tag)) {
			return category.id;
		}
	}
	return null;
}

/**
 * Gets all tags from a specific category
 * @param categoryId - The category ID
 * @param allTags - Array of all available tags
 * @returns Array of tags in the category that are available
 */
export function getTagsByCategory(
	categoryId: string,
	allTags: string[],
): string[] {
	const category = TAG_CATEGORIES.find((cat) => cat.id === categoryId);
	if (!category) return [];

	return category.tags.filter((tag) => allTags.includes(tag));
}
