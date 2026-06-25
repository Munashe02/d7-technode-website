export default {
  name: 'resource',
  title: 'Resources & Manuals',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'User Manual', value: 'user-manual' },
          { title: 'Technical Documentation', value: 'technical-doc' },
          { title: 'Product Guide', value: 'product-guide' },
          { title: 'Training Material', value: 'training' },
          { title: 'White Paper', value: 'white-paper' },
          { title: 'Case Study', value: 'case-study' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'fileUpload',
      title: 'Upload File',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip',
      },
    },
    {
      name: 'fileUrl',
      title: 'External File URL (Optional)',
      type: 'url',
      description: 'If file is hosted externally, provide URL here',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'featured',
      title: 'Featured Resource',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'coverImage',
    },
    prepare(selection: any) {
      const { title, category, media } = selection
      return {
        title: title,
        subtitle: category,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
}
