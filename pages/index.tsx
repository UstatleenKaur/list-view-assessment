import { Inter } from 'next/font/google'
import { useContext } from 'react'
import IssueContextWrapper from '@/contexts/issues-wrapper'
import IssuesContext from '@/contexts/issues'
import IssueGroups from '@/components/organisms/issue-groups'
import IssuesList from '@/components/organisms/issue-renderer'
import IssueGroupByTags from '@/components/organisms/issue-group-by-tags'
import LoadingIssues from '@/components/molecules/loading-issues'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const { loading, params } = useContext(IssuesContext);

  return (
    <main className={`flex min-h-screen flex-col items-center px-3 ${inter.className}`}>
      <IssueGroupByTags />
      {loading ? (
        <LoadingIssues totalItems={5} />
      ) : params.groupBy ? <IssueGroups /> : <IssuesList />}
    </main>
  )
}

export default function HomeWrapper() {
  return (
    <IssueContextWrapper>
      <Home />
    </IssueContextWrapper>
  )
}
