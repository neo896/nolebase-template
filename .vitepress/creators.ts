export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'Neo',
    avatar: '',
    username: 'Neo',
    title: 'Life is binary',
    desc: '开发者，后端开发，自动驾驶',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/neo896' },
      { type: 'bilibili', icon: 'bilibili', link: 'https://space.bilibili.com/220081065?spm_id_from=333.1007.0.0' },
    ],
    nameAliases: ['Neo'],
    emailAliases: ['qqkkwana@gmail.com'],
  },
  
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
