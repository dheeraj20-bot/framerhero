import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*'
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: ['Promotional', 'Corporate', 'Social', 'Youtube', 'Event']
      }
    }),
  ],
})
