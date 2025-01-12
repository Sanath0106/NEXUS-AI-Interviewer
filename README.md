<div align="left" style="position: relative;">
<h1>NEXUS-AI-INTERVIEWER</h1>


## 🔗 Quick Links

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)


---

## 👾 Features

<code>
❯ AI Interview: Simulates mock interviews tailored to various job roles and provides detailed feedback, including improvement suggestions.

❯ Resume Analyzer: Evaluates resumes for structure, clarity, and relevance, offering actionable tips to enhance their appeal.

❯ Code Debugger: Generates buggy code based on selected difficulty and topic, provides hints, and validates user corrections with real-time feedback.

❯ Quiz Generator: Creates customized quizzes based on user inputs, supporting a variety of topics and difficulty levels.
</code>

---


## 📁 Project Structure

```sh
└── NEXUS-AI-Interviewer/
    ├── README.md
    ├── app
    │   ├── (dashboard)
    │   ├── api
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── interview
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── sign-in
    │   └── sign-up
    ├── components
    │   ├── CodeEditor.tsx
    │   ├── LoadingSkeleton.tsx
    │   ├── challenge
    │   ├── interview
    │   ├── navigation.tsx
    │   ├── quiz
    │   └── ui
    ├── components.json
    ├── hooks
    │   └── use-toast.ts
    ├── lib
    │   ├── api.ts
    │   ├── gemini.ts
    │   ├── sounds.ts
    │   └── utils.ts
    ├── middleware.ts
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── env.local (create new file and add env's)
    ├── public
    │   ├── file.svg
    │   ├── globe.svg
    │   ├── icons
    │   ├── next.svg
    │   ├── vercel.svg
    │   └── window.svg
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── types
        └── quiz.ts
```


### 📂 Project Index
<details open>
	<summary><b><code>NEXUS-AI-INTERVIEWER/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/next.config.ts'>next.config.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/middleware.ts'>middleware.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/postcss.config.mjs'>postcss.config.mjs</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components.json'>components.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/tailwind.config.ts'>tailwind.config.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- types Submodule -->
		<summary><b>types</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/types/quiz.ts'>quiz.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- lib Submodule -->
		<summary><b>lib</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/lib/sounds.ts'>sounds.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/lib/gemini.ts'>gemini.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/lib/api.ts'>api.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/lib/utils.ts'>utils.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- components Submodule -->
		<summary><b>components</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/CodeEditor.tsx'>CodeEditor.tsx</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/navigation.tsx'>navigation.tsx</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/LoadingSkeleton.tsx'>LoadingSkeleton.tsx</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>interview</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/interview/InterviewQuestions.tsx'>InterviewQuestions.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/interview/error.tsx'>error.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/interview/PermissionsDialog.tsx'>PermissionsDialog.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/interview/FeedbackDisplay.tsx'>FeedbackDisplay.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/interview/loading.tsx'>loading.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/interview/InterviewDialog.tsx'>InterviewDialog.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>quiz</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/quiz/QuizContent.tsx'>QuizContent.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/quiz/DecorativeElements.tsx'>DecorativeElements.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/quiz/loading.tsx'>loading.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/quiz/QuizWrapper.tsx'>QuizWrapper.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>challenge</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/challenge/ChallengeGenerator.tsx'>ChallengeGenerator.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>ui</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/ui/toaster.tsx'>toaster.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/ui/progress.tsx'>progress.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/ui/badge.tsx'>badge.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/ui/label.tsx'>label.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/ui/typing-effect.tsx'>typing-effect.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/ui/input.tsx'>input.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/ui/textarea.tsx'>textarea.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/ui/toast.tsx'>toast.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/ui/select.tsx'>select.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/ui/button.tsx'>button.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/ui/dialog.tsx'>dialog.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/ui/navigation-menu.tsx'>navigation-menu.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/ui/use-toast.ts'>use-toast.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/components/ui/card.tsx'>card.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- hooks Submodule -->
		<summary><b>hooks</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/hooks/use-toast.ts'>use-toast.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- app Submodule -->
		<summary><b>app</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/layout.tsx'>layout.tsx</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/globals.css'>globals.css</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/page.tsx'>page.tsx</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>interview</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/interview/page.tsx'>page.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>feedback</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/interview/feedback/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>[session]</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/interview/[session]/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>sign-in</b></summary>
				<blockquote>
					<details>
						<summary><b>[[...sign-in]]</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/sign-in/[[...sign-in]]/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>(dashboard)</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/(dashboard)/layout.tsx'>layout.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>resume</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/(dashboard)/resume/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>debugger</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/(dashboard)/debugger/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>quiz</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/(dashboard)/quiz/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>challenge</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/(dashboard)/challenge/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>dashboard</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/(dashboard)/dashboard/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>sign-up</b></summary>
				<blockquote>
					<details>
						<summary><b>[[...sign-up]]</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/sign-up/[[...sign-up]]/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>api</b></summary>
				<blockquote>
					<details>
						<summary><b>generate-challenge</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/api/generate-challenge/route.ts'>route.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>analyze-answer</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/api/analyze-answer/route.ts'>route.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>generate-questions</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/api/generate-questions/route.ts'>route.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>news</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/api/news/route.ts'>route.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>jobs</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/api/jobs/route.ts'>route.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>analyze-interview</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Sanath0106/NEXUS-AI-Interviewer/blob/master/app/api/analyze-interview/route.ts'>route.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with NEXUS-AI-Interviewer, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm


### ⚙️ Installation

Install NEXUS-AI-Interviewer using one of the following methods:

**Build from source:**

1. Clone the NEXUS-AI-Interviewer repository:
```sh
❯ git clone https://github.com/Sanath0106/NEXUS-AI-Interviewer
```

2. Navigate to the project directory:
```sh
❯ cd NEXUS-AI-Interviewer
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




### 🤖 Usage
Run NEXUS-AI-Interviewer using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run dev
```
