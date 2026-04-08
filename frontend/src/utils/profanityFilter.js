import filter from 'leo-profanity'

export const filterProfanity = text => {
  if (!text) return

  filter.loadDictionary('ru')
  const ruBadWords = filter.list()
  filter.loadDictionary('en')
  filter.add(ruBadWords)

  const cleanText = filter.clean(text)
  return cleanText
}
