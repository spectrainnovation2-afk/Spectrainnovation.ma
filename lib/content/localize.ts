import type { LocalizedString } from '@/lib/content/services'

export function L(fr: string, en: string, ar: string): LocalizedString {
  return { fr, en, ar }
}
