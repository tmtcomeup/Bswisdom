# Resource Section Routing Fix Implementation Plan

## Problem
- Resources section navigation is not working correctly
- Mixed use of relative and absolute paths causing navigation issues
- Content not loading in subcategories

## Solution: Standardize to Absolute Paths

### 1. Main Resources Page (index.tsx)
```tsx
// Update category links to use absolute paths
to={`/resources/${category.id}`}
```

### 2. Category Index Pages (e.g., legal/index.tsx)
```tsx
// Update service links
to={`/resources/legal/${service.id}`}

// Update guide links
to={`/resources/legal/guides/${guide.id}`}
```

### 3. Subcategory Pages (e.g., civil-motions.tsx)
```tsx
// Update related guide paths
path: '/resources/legal/guides/summary-judgment'
```

### 4. Guide Links
```tsx
// Update all guide references to use absolute paths
to={`/resources/${category}/guides/${guideId}`}
```

## Implementation Steps

1. Update main resources/index.tsx category links
2. Update each category index page (legal, academic, etc.)
3. Update all subcategory pages
4. Test navigation flow:
   - Main resources → Categories
   - Categories → Subcategories
   - Categories → Guides
   - Subcategories → Related guides

## Paths Structure

```
/resources/                        # Main resources page
/resources/{category}/            # Category index (e.g., legal, academic)
/resources/{category}/{subtype}/  # Subcategory page (e.g., civil-motions)
/resources/{category}/guides/     # Guide pages
```

## Expected Outcome
- Consistent navigation throughout the resources section
- All content loading correctly in each section
- Proper routing between related sections and guides