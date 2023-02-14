import type { Prisma, UserExample } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { data: { email: 'String3096939' } },
    two: { data: { email: 'String7342939' } },
  },
})

export type StandardScenario = ScenarioData<UserExample, 'userExample'>
