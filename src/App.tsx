import SubjectTabs from "@/components/SubjectTabs";
import { ProgressProvider } from "@/context/ProgressContext";

export default function App() {
  return (
    <ProgressProvider>
      <SubjectTabs />
    </ProgressProvider>
  );
}
