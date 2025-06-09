# Resource Section Routing Implementation Plan

## 1. Ebook Section
- Change directory: `/ebooks` -> `/ebook`
- Files to preserve with content:
  ```
  /ebook
  ├── index.tsx
  ├── fiction-writing.tsx
  ├── nonfiction-writing.tsx
  ├── book-marketing.tsx
  ├── self-publishing.tsx
  ├── ebook-formatting.tsx
  └── /guides
  ```

## 2. Website Section
- Change directory: `/websites` -> `/website`
- Match route paths:
  ```
  /website
  ├── index.tsx
  ├── web-design.tsx
  ├── development.tsx
  ├── ecommerce.tsx
  ├── maintenance.tsx
  └── /guides
      ├── platform-selection.tsx
      ├── essential-elements.tsx
      └── landing-page.tsx
  ```

## 3. Tools Section
- Keep `/tools` directory
- Move any content from `/digital-tools` if newer
- Match route paths:
  ```
  /tools
  ├── index.tsx
  ├── project-management.tsx
  ├── business-templates.tsx
  ├── workflow-automation.tsx
  ├── analytics-tools.tsx
  └── /guides
      ├── marketing-plan-generator.tsx
      ├── budgeting.tsx
      └── project-management.tsx
  ```

## Implementation Steps

1. For each section:
   - Check for existing content
   - Move files to match route paths exactly
   - Keep index.tsx from most updated version
   - Create any missing guides directories

2. Directory Structure:
   ```
   /resources
   ├── /ebook           (renamed from /ebooks)
   ├── /website        (renamed from /websites)
   ├── /tools          (consolidated from /digital-tools)
   └── [other directories remain unchanged]
   ```

3. Testing:
   - Check all imports resolve correctly
   - Verify all routes match component locations
   - Test navigation between sections