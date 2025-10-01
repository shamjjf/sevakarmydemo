import React, { Fragment, useState } from "react";
import Navbar from "./Navbar/Navbar";
import PageTitle from "./pagetitle/PageTitle";
import Footer from "./footer/Footer";
import Scrollbar from "./scrollbar/scrollbar";
import Logo from '../../public/assets/images/logo.svg'

const accordionData = [
    {
        title: "How do I register for  Sevak Army?",
        content: (
            <>
                To register for  Sevak Army, click the <strong>'Register'</strong> button on the homepage. Enter your details such as name, email address and password, then click <strong>'Register'</strong>. You'll receive a confirmation email to verify your account.
            </>
        )
    },
    {
        title: "I didn't receive my account verification email. What should I do?", content: (
            <>
                Check your spam or junk folder. If it's not there, click the <strong>'Resend Verification Email'</strong>  button on the login page. If the issue persists, contact our support team.
            </>
        )
    },
    {
        title: "How do I log into my Sevak Army account?",
        content: (
            <>
                Go to the homepage and click on <strong>'Login'</strong>. Enter your registered email address and password, then click <strong>'Submit'</strong>.
            </>
        )
    },
    {
        title: "What should I do if I forgot my password?",
        content: (
            <>
                Click <strong>'Forgot Password'</strong> on the login page. Enter your email address and a password reset link will be sent to you.
            </>
        )
    },
    {
        title: "Can I change my registered email address?",
        content: (
            <>
                Yes, you can. Go to your account settings and select <strong>'Change Email'</strong>. Follow the on-screen instructions to update your email address.
            </>
        )
    },
    {
        title: "How do I update my profile information?",
        content: (
            <>
                Log in to your account and navigate to <strong>'Profile Settings'</strong>. From there, you can update personal information like your name, profile picture and contact details.
            </>
        )
    },
    {
        title: "Can I delete my Sevak Army account?",
        content: (
            <>
                Yes, you can. Go to your <strong>'Account Settings'</strong> and click <strong>'Delete Account'</strong>. Keep in mind that this action is irreversible.
            </>
        )
    },
    {
        title: "What if I can’t log in to my account?",
        content: (
            <>
                First, double-check your login credentials. If the problem persists, reset your password. If you still cannot log in, contact our technical support team for assistance.
            </>
        )
    },
    {
        title: "How do I recover my account if I’ve been locked out?",
        content: (
            <>
                If your account has been locked due to multiple failed login attempts, you can reset your password or contact support to regain access.
            </>
        )
    },
    {
        title: "Why do I need to verify my email address?",
        content: (
            <>
                Email verification ensures the security of your account and allows us to send you important notifications regarding your activity in  Sevak Army.
            </>
        )
    },
    {
        title: "Can I use my social media accounts to register?",
        content: (
            <>
                Yes,  Sevak Army supports signup and login via Google and Facebook accounts.
            </>
        )
    },
    {
        title: "What should I do if I can't reset my password?",
        content: (
            <>
                Ensure you are entering the correct email associated with your account. If you continue having issues, contact our support team for help.
            </>
        )
    },
    {
        "title": "How do I log out of my Sevak Army account?",
        "content": (
            <>
                Click on your profile icon in the top-right corner of the dashboard and select <strong>'Logout'</strong> from the dropdown menu.
            </>
        )
    },
    {
        "title": "What happens if I deactivate my account?",
        "content": (
            <>
                Deactivating your account temporarily disables your profile. You can reactivate it by logging back in at any time.
            </>
        )
    },
    {
        "title": "Can I register with a work email?",
        "content": (
            <>
                Yes, you can use any valid email address to register for  Sevak Army.
            </>
        )
    },
    {
        "title": "How do I change my password?",
        "content": (
            <>
                Go to <strong>'Account Settings'</strong>, click <strong>'Change Password'</strong> and follow the instructions.
            </>
        )
    },
    {
        "title": "Can I have multiple accounts in  Sevak Army?",
        "content": (
            <>
                No, each individual is allowed to register only one account.
            </>
        )
    },
    {
        "title": "How do I navigate through the dashboard?",
        "content": (
            <>
                After logging in, you'll see a sidebar on the left where you can access different sections like your tasks, messages, profile settings and more.
            </>
        )
    },
    {
        "title": "Can I link multiple email addresses to my account?",
        "content": (
            <>
                Currently, you can only register one email per account.
            </>
        )
    },
    {
        "title": "What should I do if I can't access the dashboard?",
        "content": (
            <>
                Try refreshing the page or logging in again. If that doesn’t work, clear your browser cache or try using a different browser. If the issue persists, contact support.
            </>
        )
    },
    {
        "title": "Is my data safe with  Sevak Army?",
        "content": (
            <>
                Yes,  Sevak Army uses advanced encryption methods to ensure that your personal and NGO information is secure.
            </>
        )
    },
    {
        "title": "Can I edit my username after registration?",
        "content": (
            <>
                Yes, you can change your username by going to <strong>'Profile Settings'</strong> and editing your account information.
            </>
        )
    },
    {
        "title": "How do I find specific tasks or projects on the platform?",
        "content": (
            <>
                Once logged in, use the search bar on the dashboard to find specific tasks, projects or organisations.
            </>
        )
    },
    {
        "title": "How do I access my past activities in  Sevak Army?",
        "content": (
            <>
                Go to the <strong>'My Activities'</strong> section in the dashboard to view your past tasks and contributions.
            </>
        )
    },
    {
        "title": "Can I recover a deleted account?",
        "content": (
            <>
                Unfortunately, once an account is deleted, it cannot be recovered. You’ll need to create a new account.
            </>
        )
    },
    {
        "title": "How do I contact support if I encounter an issue?",
        "content": (
            <>
                You can reach our support team via the <strong>'Contact Support'</strong> link in the footer or the help section in your dashboard.
            </>
        )
    },
    {
        "title": "Why am I seeing an 'Account Suspended' message?",
        "content": (
            <>
                Your account may be suspended for violating our community guidelines. Contact support for more details.
            </>
        )
    },
    {
        "title": "How can I invite friends to join  Sevak Army?",
        "content": (
            <>
                You can invite friends through the <strong>'Invite Friends'</strong> feature in your dashboard. Enter their email address and they will receive an invitation to register.
            </>
        )
    },
    {
        "title": "Can I export data from my account?",
        "content": (
            <>
                Yes, you can export your task and project data from the <strong>'My Data'</strong> section in the dashboard.
            </>
        )
    },
    {
        "title": "How do I reset my two-factor authentication (2FA)?",
        "content": (
            <>
                If you've enabled 2FA and need to reset it, go to your <strong>'Account Settings'</strong>, select <strong>'Security'</strong> and follow the instructions to reset your 2FA.
            </>
        )
    },
    {
        "title": "What browsers are compatible with  Sevak Army?",
        "content": (
            <>
                Sevak Army is compatible with the latest versions of Google Chrome, Mozilla Firefox, Microsoft Edge and Safari.
            </>
        )
    },
    {
        "title": "How can I switch between different profiles (e.g., volunteer organisation)?",
        "content": (
            <>
                If you have multiple roles (e.g. volunteer and organisation), you can switch between profiles by clicking on your profile picture and selecting the desired role from the dropdown.
            </>
        )
    },
    {
        "title": "Can I link my Sevak Army account to my LinkedIn profile?",
        "content": (
            <>
                Yes, you can link your Sevak Army account to LinkedIn by going to <strong>'Profile Settings'</strong> and selecting the <strong>'Connect to LinkedIn'</strong> option.
            </>
        )
    },
    {
        "title": "How do I update my notification preferences?",
        "content": (
            <>
                Go to <strong>'Notification Settings'</strong> in your dashboard. You can customise email and in-app notifications based on your preferences.
            </>
        )
    },
    {
        "title": "Why am I not receiving email notifications?",
        "content": (
            <>
                Check your notification preferences in <strong>'Account Settings'</strong> and make sure email notifications are enabled. Also, ensure that emails from  Sevak Army aren't being sent to your spam folder.
            </>
        )
    },
    {
        "title": "Can I share my task completion with my social media accounts?",
        "content": (
            <>
                Yes, after completing a task, you can share your achievement directly to social media platforms by using the share buttons available in your task summary.
            </>
        )
    },
    {
        "title": "How do I recover an archived task?",
        "content": (
            <>
                Go to <strong>'Archived Tasks'</strong> in the <strong>'My Tasks'</strong> section. From there, you can restore any task you’ve previously archived.
            </>
        )
    },
    {
        "title": "How do I delete a task from my dashboard?",
        "content": (
            <>
                To delete a task, navigate to <strong>'My Tasks'</strong>, click on the task you want to delete and select <strong>'Delete'</strong>. Be aware that this action cannot be undone.
            </>
        )
    },
    {
        "title": "Can I customise my dashboard layout?",
        "content": (
            <>
                Currently, you cannot customise the dashboard layout, but you can use filters and sorting options to personalise how tasks and projects are displayed.
            </>
        )
    },
    {
        "title": "How can I change the language settings on my account?",
        "content": (
            <>
                Go to <strong>'Account Settings'</strong>, select <strong>'Language'</strong> and choose from the available options.
            </>
        )
    },
    {
        "title": "What are badges in  Sevak Army and how do I earn them?",
        "content": (
            <>
                Digital badges are rewards for completing certain tasks or milestones. You can earn digital badges by completing tasks, contributing to campaigns or reaching certain milestones as a volunteer or NGO..
            </>
        )
    },
    {
        "title": "How do I check my task history?",
        "content": (
            <>
                Go to <strong>'My Activities'</strong> on your dashboard. Here, you’ll find a detailed history of all the tasks and projects you've participated in.
            </>
        )
    },
    {
        "title": "Can I download my task history as a report?",
        "content": (
            <>
                Yes, you can download your task history in the <strong>'My Activities'</strong> section. Click on <strong>'Download Report'</strong> to export the data.
            </>
        )
    },
    {
        "title": "How can I report a problem with my account?",
        "content": (
            <>
                If you're experiencing issues with your account, click the <strong>'Help'</strong> section in your dashboard and you’ll be able to report a problem directly to our support team.
            </>
        )
    },
    {
        "title": "Is it possible to recover a deleted task?",
        "content": (
            <>
                No, once a task is deleted from your dashboard, it cannot be recovered.
            </>
        )
    },
    {
        "title": "How can I change my profile picture?",
        "content": (
            <>
                Go to <strong>'Profile Settings'</strong>, click on your current profile picture and upload a new image.
            </>
        )
    },
    {
        "title": "What should I do if I notice suspicious activity on my account?",
        "content": (
            <>
                If you notice any unusual activity on your account, change your password immediately and contact our support team to secure your account.
            </>
        )
    },
    {
        "title": "Can I deactivate notifications temporarily?",
        "content": (
            <>
                Yes, you can mute notifications by going to <strong>'Notification Settings'</strong> and selecting the <strong>'Mute All'</strong> option.
            </>
        )
    },
    {
        "title": "How do I join an NGO as a volunteer? ",
        "content": (
            <>
                Search for the NGO on the platform and click <strong>'Join'</strong>. The NGO admin will then review and approve your request.
            </>
        )
    },
    {
        "title": "How do I delete my search history?",
        "content": (
            <>
                You can delete your search history by navigating to <strong>'Settings'</strong>, selecting <strong>'Privacy'</strong> and clicking on <strong>'Clear Search History'</strong>.
            </>
        )
    },
    {
        "title": "Can I view my account activity log?",
        "content": (
            <>
                Yes, in your <strong>'Account Settings'</strong>, there is an <strong>'Activity Log'</strong> section where you can view recent account activities like logins, changes to your profile and more.
            </>
        )
    },
    {
        "title": "How do I enable dark mode on  Sevak Army platform?",
        "content": (
            <>
                Go to <strong>'Display Settings'</strong> in your dashboard and toggle on <strong>'Dark Mode'</strong> to enable it.
            </>
        )
    },
    {
        "title": "Can I change my password if I’m already logged in?",
        "content": (
            <>
                Yes, you can change your password by going to <strong>'Account Settings'</strong> and clicking on <strong>'Change Password'</strong>.
            </>
        )
    },
    {
        "title": "How can I reset my security questions?",
        "content": (
            <>
                Go to <strong>'Security Settings'</strong> in your account and select <strong>'Reset Security Questions'</strong>. Follow the prompts to set new security questions.
            </>
        )
    },
    {
        "title": "How do I log out of all devices?",
        "content": (
            <>
                In <strong>'Account Settings'</strong>, you can select <strong>'Log out of all devices'</strong> to ensure that you are logged out from all active sessions.
            </>
        )
    },
    {
        "title": "What is  Sevak Army dashboard used for?",
        "content": (
            <>
                The dashboard is your personalised space for managing your tasks, projects and interactions on the platform. You can view your current tasks, check notifications and manage your account settings.
            </>
        )
    },
    {
        "title": "Can I disable task recommendations?",
        "content": (
            <>
                Yes, you can disable task recommendations in <strong>'Notification Settings'</strong> by toggling off task-related notifications.
            </>
        )
    },
    {
        "title": "How do I update my contact information?",
        "content": (
            <>
                In <strong>'Profile Settings'</strong>, you’ll find options to update your email, mobile number and other contact details.
            </>
        )
    },
    {
        "title": "What happens if my account is flagged for inappropriate activity?",
        "content": (
            <>
                If your account is flagged for inappropriate activity, you may receive a warning or have your account temporarily suspended. Repeat violations can result in a permanent ban.
            </>
        )
    },
    {
        "title": "How do I add a profile bio?",
        "content": (
            <>
                To add a bio, go to <strong>'Profile Settings'</strong>, find the <strong>'Bio'</strong> section and type in your desired information. Save your changes to update your profile.
            </>
        )
    },
    {
        "title": "Can I hide my profile from public view?",
        "content": (
            <>
                Yes, you can adjust your privacy settings to make your profile visible only to specific groups or hide it from public view entirely. Go to <strong>'Privacy Settings'</strong> to customise this.
            </>
        )
    },
    {
        "title": "How do I change my time zone?",
        "content": (
            <>
                In <strong>'Account Settings'</strong>, go to the <strong>'Time Zone'</strong> section and select your preferred time zone from the dropdown menu.
            </>
        )
    },
    {
        "title": "Can I invite friends to join  Sevak Army?",
        "content": (
            <>
                Yes, you can invite friends to join by clicking on <strong>'Invite Friends'</strong> from your dashboard and sharing an invitation link via email or social media.
            </>
        )
    },
    {
        "title": "How do I deactivate my account temporarily?",
        "content": (
            <>
                To deactivate your account, go to <strong>'Account Settings'</strong> and click on <strong>'Deactivate Account'</strong>. You can reactivate it at any time by logging back in.
            </>
        )
    },
    {
        "title": "What is the difference between deactivating and deleting an account?",
        "content": (
            <>
                Deactivating your account hides your profile and activities temporarily while deleting an account removes all your data and cannot be undone.
            </>
        )
    },
    {
        "title": "How do I track my progress on ongoing tasks?",
        "content": (
            <>
                You can track your task progress by navigating to <strong>'My Tasks'</strong>, where you’ll see a progress bar and updates for each task you’ve signed up for.
            </>
        )
    },
    {
        "title": "What happens if I miss a task deadline?",
        "content": (
            <>
                If you miss a task deadline, the task may be marked as incomplete and your participation record will reflect this. You can contact the task creator for any possible extensions.
            </>
        )
    },
    {
        "title": "How do I request an extension on a task?",
        "content": (
            <>
                To request an extension, contact the task creator directly via the <strong>'Message'</strong> option on the task page and explain your situation.
            </>
        )
    },
    {
        "title": "Can I collaborate with other volunteers on tasks?",
        "content": (
            <>
                Yes, you can collaborate with other volunteers by joining group tasks or connecting with others through the messaging feature.
            </>
        )
    },
    {
        "title": "How do I mark a task as completed?",
        "content": (
            <>
                Once you've finished a task, go to <strong>'My Tasks'</strong>, select the task and click on <strong>'Mark as Completed'</strong>. The task creator may need to verify your completion.
            </>
        )
    },
    {
        "title": "Can I leave a task after registering?",
        "content": (
            <>
                Yes, if you need to withdraw from a task, go to <strong>'My Tasks'</strong>, click on the task and select <strong>'Leave Task'</strong>. Be sure to notify the task creator.
            </>
        )
    },
    {
        "title": "How can I give feedback on a completed task?",
        "content": (
            <>
                After completing a task, you’ll be prompted to leave feedback. You can also find the feedback option in the <strong>'My Activities'</strong> section of your dashboard.
            </>
        )
    },
    {
        "title": "What should I do if I experience issues with a task creator?",
        "content": (
            <>
                If you're having issues with a task creator, you can report the problem using the <strong>'Report Issue'</strong> button on the task page.
            </>
        )
    },
    {
        "title": "Can I filter tasks based on location?",
        "content": (
            <>
                Yes, you can use the filter option on the task search page to narrow down tasks based on location.
            </>
        )
    },
    {
        "title": "What are featured tasks?",
        "content": (
            <>
                Featured tasks are highlighted opportunities that are recommended by  Sevak Army based on their impact and relevance. You can find these on your dashboard and task search pages.
            </>
        )
    },
    {
        "title": "How can I save tasks for later?",
        "content": (
            <>
                You can save tasks by clicking the <strong>'Save for Later'</strong> button on the task page. These will appear in your <strong>'Saved Tasks'</strong> section.
            </>
        )
    },
    {
        "title": "Can I follow a specific NGO in  Sevak Army?",
        "content": (
            <>
                Yes, you can follow NGOs to stay updated on their latest projects and tasks. Simply visit the organisation’s profile and click  <strong>'Follow'</strong>.
            </>
        )
    },
    {
        "title": "What is a task summary report?",
        "content": (
            <>
                A task summary report provides an overview of your contribution to a task, including hours spent and achievements. You can download this from your <strong>'My Activities'</strong> section.
            </>
        )
    },
    {
        "title": "How can I check the number of tasks I’ve completed?",
        "content": (
            <>
                You can view your completed tasks by going to <strong>'My Activities'</strong>. Here, you’ll see a list of all completed tasks along with details like dates and task creators.
            </>
        )
    },
    {
        "title": "Can I edit a task after posting it?",
        "content": (
            <>
                If you are the task creator, you can edit a task by navigating to <strong>'My Projects'</strong>, selecting the task and clicking on <strong>'Edit'</strong>. Note that some changes might require admin approval.
            </>
        )
    },
    {
        "title": "How do I cancel a task?",
        "content": (
            <>
                To cancel a task, go to <strong>'My Projects'</strong>, select the task and click on <strong>'Cancel Task'</strong>. All volunteers will be notified about the cancellation.
            </>
        )
    },
    {
        "title": "How do I create a new task?",
        "content": (
            <>
                To create a new task, go to your dashboard and click on <strong>'Create Task'</strong>. Fill out the necessary details like title, description, requirements and deadline and then submit it for approval.
            </>
        )
    },
    {
        "title": "What is the maximum number of volunteers I can invite to a task?",
        "content": (
            <>
                The number of volunteers you can invite depends on the type of task and organisation. Check the task creation guidelines for specific limits.
            </>
        )
    },
    {
        "title": "How do I share a task with others?",
        "content": (
            <>
                You can share tasks via social media, email or direct messaging by using the <strong>'Share Task'</strong> button available on each task page.
            </>
        )
    },
    {
        "title": "How do I find popular tasks in  Sevak Army?",
        "content": (
            <>
                Popular tasks are listed under the <strong>'Trending Tasks'</strong> section on your dashboard. You can also filter tasks by popularity in the search options.
            </>
        )
    },
    {
        "title": "Can I create recurring tasks?",
        "content": (
            <>
                Yes, when creating a task, you have the option to set it as recurring by specifying the frequency (e.g. weekly or monthly).
            </>
        )
    },
    {
        "title": "How do I manage multiple tasks at once?",
        "content": (
            <>
                In your <strong>'My Tasks'</strong> section, you can view and manage all your active tasks, sort them by deadline or priority and mark them as completed or in progress.
            </>
        )
    },
    {
        "title": "Can I rate my experience with a task creator?",
        "content": (
            <>
                Yes, after completing a task, you’ll be prompted to rate your experience with the task creator. This helps maintain the quality of tasks in  Sevak Army.
            </>
        )
    },
    {
        "title": "What should I do if I encounter inappropriate content on the platform?",
        "content": (
            <>
                If you come across inappropriate content, use the <strong>'Report'</strong> feature available on the task or user profile page. Our support team will investigate the issue promptly.
            </>
        )
    },
    {
        "title": "How can I report a user on the platform?",
        "content": (
            <>
                To report a user, visit their profile and click on the <strong>'Report User'</strong> option. You can select the reason for reporting and submit it to our support team for review.
            </>
        )
    },
    {
        "title": "What should I do if I forget my username?",
        "content": (
            <>
                If you've forgotten your username, you can retrieve it by clicking on <strong>'Forgot Username'</strong> on the login page and following the instructions provided.
            </>
        )
    },
    {
        "title": "Can I link my Sevak Army account to my social media profiles?",
        "content": (
            <>
                Yes, you can link your social media profiles to your Sevak Army account by going to <strong>'Account Settings'</strong> and selecting <strong>'Linked Accounts'</strong>.
            </>
        )
    },
    {
        "title": "How do I unlink my social media accounts?",
        "content": (
            <>
                To unlink a social media account, navigate to <strong>'Account Settings'</strong>, find the <strong>'Linked Accounts'</strong> section and click on <strong>'Unlink'</strong> next to the account you want to remove.
            </>
        )
    },
    {
        "title": "What are the benefits of linking my social media accounts?",
        "content": (
            <>
                Linking your social media accounts allows you to easily share tasks, track your volunteer contributions across platforms and use social logins for quick access to your Sevak Army account.
            </>
        )
    },
    {
        "title": "Can I merge multiple accounts?",
        "content": (
            <>
                No, it is not possible to merge multiple accounts. You can only use one account per email address in  Sevak Army.
            </>
        )
    },
    {
        "title": "Can I change the frequency of notifications?",
        "content": (
            <>
                Yes, you can adjust how frequently you receive notifications. Go to <strong>'Account Settings'</strong>  <strong>'Notifications'</strong> and set your preferences for real-time, daily or weekly updates.
            </>
        )
    },
    {
        "title": "How do I unsubscribe from Sevak Army emails?",
        "content": (
            <>
                To unsubscribe from Sevak Army emails, click the <strong>'Unsubscribe'</strong> link at the bottom of any email or go to <strong>'Account Settings'</strong>  <strong>'Notifications'</strong> and uncheck email alerts.
            </>
        )
    },
    {
        "title": "What is the difference between task alerts and general notifications?",
        "content": (
            <>
                Task alerts notify you about updates or changes to specific tasks you’re involved in, while general notifications cover announcements, new features and platform news.
            </>
        )
    },
    {
        "title": "How do I find events hosted by  Sevak Army?",
        "content": (
            <>
                You can find upcoming events on the <strong>'Events'</strong> page, accessible from your dashboard. You can also filter events by location, date and type of activity.
            </>
        )
    },
    {
        "title": "Can I host an event through  Sevak Army?",
        "content": (
            <>
                Yes organisations and verified users can host events. Go to <strong>'Create Event'</strong> under your dashboard and follow the instructions for submitting your event for approval.
            </>
        )
    },
    {
        "title": "What is the approval process for hosting an event?",
        "content": (
            <>
                Once you submit your event details, our team will review them to ensure they comply with our guidelines. You will receive a notification once it is approved or if any changes are needed.
            </>
        )
    },
    {
        "title": "How do I edit an event I’ve created?",
        "content": (
            <>
                To edit an event, go to <strong>'My Events'</strong>, select the event and click on <strong>'Edit'</strong>. You can change details like date, location or description. Note that some edits may require pre-approval.
            </>
        )
    },
    {
        "title": "How do I cancel an event?",
        "content": (
            <>
                To cancel an event, go to <strong>'My Events'</strong>, select the event and click <strong>'Cancel'</strong>. All registered participants will be notified of the cancellation.
            </>
        )
    },
    {
        "title": "Can I register for events as a volunteer?",
        "content": (
            <>
                Yes, you can register for events through the <strong>'Events'</strong> page by clicking on the event you're interested in and selecting <strong>'Register'</strong>.
            </>
        )
    },
    {
        "title": "What should I do if an event I registered for is cancelled?",
        "content": (
            <>
                If an event you registered for is cancelled, you will receive a notification. You can either choose to join another event or contact the event organiser for more details.
            </>
        )
    },
    {
        "title": "How do I report inappropriate behaviour during an event?",
        "content": (
            <>
                If you encounter inappropriate behaviour during an event, you can report it to the event organiser directly or use the <strong>'Report'</strong> feature on the event page.
            </>
        )
    },
    {
        "title": "Can I receive a certificate for participating in an event?",
        "content": (
            <>
                Yes, many events provide certificates of participation. Check with the event organiser if certificates are available and how you can obtain one after completing the event.
            </>
        )
    },
    {
        "title": "What should I do if I’m unable to attend an event I registered for?",
        "content": (
            <>
                If you’re unable to attend an event, go to <strong>'My Events'</strong> and click on <strong>'Cancel Registration'</strong> to free up your spot for others. Be sure to notify the event organiser if possible.
            </>
        )
    },
    {
        "title": "How do I contact the event organiser?",
        "content": (
            <>
                You can contact the event organiser via the <strong>'Message'</strong> button on the event page or find their contact details in the event description.
            </>
        )
    },
    {
        "title": "Can I attend events outside my region?",
        "content": (
            <>
                Yes, you can attend events outside your region as long as the event Organizer allows it. Some events may be virtual, making it easier to participate from anywhere.
            </>
        )
    },
    {
        "title": "How do I find virtual events in Sevak Army?",
        "content": (
            <>
                Virtual events are listed on the <strong>'Events'</strong> page and you can filter them by selecting <strong>'Virtual'</strong> under the event type filter.
            </>
        )
    },
    {
        "title": "What are Sevak Army’s policies on event safety?",
        "content": (
            <>
                Sevak Army encourages all event organisers to follow safety guidelines, including COVID-19 protocols and to provide a safe environment for participants. Volunteers should also follow the safety instructions provided by the organisers.
            </>
        )
    },
    {
        "title": "How do I request a refund for a paid event?",
        "content": (
            <>
                If you paid for an event and need a refund, contact the event organiser directly to inquire about their refund policy.
            </>
        )
    },
    {
        "title": "What is the ‘My Impact’ section on the dashboard?",
        "content": (
            <>
                The <strong>'My Impact'</strong> section tracks your contributions as a volunteer, including tasks completed, hours volunteered and events attended. It helps you monitor your personal impact.
            </>
        )
    },
    {
        "title": "How can I share my impact with others?",
        "content": (
            <>
                You can share your volunteer impact by generating a report in the <strong>'My Impact'</strong> section and sharing it via social media or email.
            </>
        )
    },
    {
        "title": "What is the difference between verified and unverified tasks?",
        "content": (
            <>
                Verified tasks are reviewed and approved by  Sevak Army to ensure their legitimacy, while unverified tasks may not have undergone our approval process yet.
            </>
        )
    },
    {
        "title": "How do I verify my identity in  Sevak Army?",
        "content": (
            <>
                To verify your identity, go to <strong>'Profile Settings'</strong> and follow the prompts to upload the required documentation such as a government-issued ID. Verification helps enhance trust within the community.
            </>
        )
    },
    {
        "title": "Can I change the email address linked to my account?",
        "content": (
            <>
                Yes, you can change your email address by going to <strong>'Account Settings'</strong>, selecting <strong>'Email'</strong> and entering your new email. You will need to verify the new email address.
            </>
        )
    },
    {
        "title": "How do I access my account if my email has been hacked?",
        "content": (
            <>
                If your email has been hacked, contact our support team immediately to secure your account. You may need to verify your identity to regain access.
            </>
        )
    },
    {
        "title": "What happens to my data if I stop using Sevak Army?",
        "content": (
            <>
                Your data remains stored according to our privacy policy. You can choose to delete your account to permanently remove your data from our servers.
            </>
        )
    },
    {
        "title": "How do I export my account data?",
        "content": (
            <>
                You can request an export of your account data by going to <strong>'Account Settings'</strong> <strong>'Privacy'</strong> and selecting <strong>'Export My Data'</strong>. This will send a downloadable file of your data to your email.
            </>
        )
    },
    {
        "title": "What is Sevak Army’s privacy policy?",
        "content": (
            <>
                Sevak Army’s privacy policy outlines how we collect, use and protect your personal information. You can review it by clicking on <strong>'Privacy Policy'</strong> at the bottom of any page.
            </>
        )
    },
    {
        "title": "How do I change the language of the website?",
        "content": (
            <>
                To change the website language, go to <strong>'Account Settings'</strong> and select <strong>'Language'</strong>. Choose your preferred language from the available options.
            </>
        )
    },
    {
        "title": "What is the 'Support' section for?",
        "content": (
            <>
                The <strong>'Support'</strong> section provides resources and help guides for navigating  Sevak Army platform. You can also submit support tickets for specific issues.
            </>
        )
    },
    {
        "title": "How do I submit a support ticket?",
        "content": (
            <>
                To submit a support ticket, go to the <strong>'Support'</strong> section, click on <strong>'Submit Ticket'</strong> and fill out the required details. Our support team will get back to you as soon as possible.
            </>
        )
    },
    {
        "title": "How do I close a support ticket?",
        "content": (
            <>
                Once your issue is resolved, you can close the ticket by going to <strong>'My Tickets'</strong> and selecting <strong>'Close Ticket'</strong>. Our team will follow up if necessary.
            </>
        )
    },
    {
        "title": "How do I access  Sevak Army knowledge base?",
        "content": (
            <>
                You can access the knowledge base via the <strong>'Support'</strong> section. It contains articles, FAQs and guides on using various features of the platform.
            </>
        )
    },
    {
        "title": "What is  Sevak Army’s refund policy for paid services?",
        "content": (
            <>
                For paid services, refunds are handled on a case-by-case basis. Contact our support team to inquire about eligibility for a refund.
            </>
        )
    },
    {
        "title": "How do I get involved in beta testing new features?",
        "content": (
            <>
                You can register for beta testing by going to <strong>'Account Settings'</strong> <strong>'Beta Tester'</strong>. Beta testers get early access to new features in exchange for providing feedback.
            </>
        )
    },
    {
        "title": "What happens if a task I’m working on gets cancelled?",
        "content": (
            <>
                If a task is cancelled, you will receive a notification and the hours you worked will still be recorded in your impact report.
            </>
        )
    },
    {
        "title": "How can I suggest a feature for  Sevak Army?",
        "content": (
            <>
                To suggest a new feature, go to the <strong>'Feedback'</strong> section in your dashboard and submit your suggestion. Our team reviews all feedback for future updates.
            </>
        )
    },
    {
        "title": "How do I stay updated with new features and announcements?",
        "content": (
            <>
                You can stay updated with new features and announcements by subscribing to our newsletter in <strong>'Account Settings'</strong> or following us on our official social media channels.
            </>
        )
    },
    {
        "title": "What are the time commitments for volunteering?",
        "content": (
            <>
                Time commitments for volunteering vary depending on the task. Each task will list the estimated time required, so you can choose tasks that fit your availability.
            </>
        )
    },
    {
        "title": "Can I participate in multiple volunteer tasks at the same time?",
        "content": (
            <>
                Yes, you can participate in multiple tasks simultaneously. However, make sure you have the time and resources to complete them within the given deadlines.
            </>
        )
    },
    {
        "title": "How can I communicate with other volunteers?",
        "content": (
            <>
                You can communicate with other volunteers through the <strong>'Messages'</strong> feature on the platform. Simply navigate to your dashboard and click <strong>'Messages'</strong> to start a conversation.
            </>
        )
    },
    {
        "title": "Can I work remotely as a volunteer?",
        "content": (
            <>
                Yes,  Sevak Army offers remote volunteering opportunities. Look for tasks marked as <strong>'Remote'</strong> when browsing available tasks.
            </>
        )
    },
    {
        "title": "How do I search for remote volunteering opportunities?",
        "content": (
            <>
                To search for remote opportunities, use the <strong>'Filter'</strong> option on the task search page and select <strong>'Remote'</strong> under location settings.
            </>
        )
    },
    {
        "title": "How do I apply for a volunteer task?",
        "content": (
            <>
                To apply for a volunteer task, click on the task you're interested in, review the details and click the <strong>'Apply'</strong> button. You'll receive a confirmation once your application is accepted.
            </>
        )
    },
    {
        "title": "Can I track my progress for tasks?",
        "content": (
            <>
                Yes, you can track your progress through your dashboard under the <strong>'My Tasks'</strong> section. You'll be able to see how much work you've completed and what remains.
            </>
        )
    },
    {
        "title": "What happens if I miss a task deadline?",
        "content": (
            <>
                If you miss a task deadline, contact the task organiser as soon as possible. Depending on the nature of the task, they may offer an extension or reassign it to someone else.
            </>
        )
    },
    {
        "title": "How do I submit completed tasks?",
        "content": (
            <>
                Once you complete a task, go to the <strong>'My Tasks'</strong> section, select the task and click <strong>'Submit for Review'</strong>. The organiser will review your work and mark it as completed.
            </>
        )
    },
    {
        "title": "How do I know if my task submission was accepted?",
        "content": (
            <>
                You will receive a notification once the organiser reviews your submission and marks it as accepted. You can also check the status in the <strong>'My Tasks'</strong> section.
            </>
        )
    },
    {
        "title": "What are the requirements to become a verified volunteer?",
        "content": (
            <>
                To become a verified volunteer, you need to complete a set number of tasks, maintain a positive performance record and verify your identity through <strong>'Profile Settings'</strong>.
            </>
        )
    },
    {
        "title": "Can I earn badges or awards for volunteering?",
        "content": (
            <>
                Yes, Sevak Army offers an digital badge and award system. You can earn digital badges for completing tasks, achieving milestones and contributing consistently.
            </>
        )
    },
    {
        "title": "How do I view my digital badges and awards?",
        "content": (
            <>
                You can view your digital badges and awards by going to your dashboard and selecting the 'Badges & Awards' tab. This section displays all the recognitions you've earned.
            </>
        )
    },
    {
        "title": "What are leaderboards and how do they work?",
        "content": (
            <>
                Leaderboards rank volunteers based on the number of tasks completed, points earned and impact made. You can view leaderboards for your region organisation or nationally.
            </>
        )
    },
    {
        "title": "How can I improve my ranking on the leaderboard?",
        "content": (
            <>
                To improve your ranking on the leaderboard, complete more tasks, contribute more hours and maintain a positive track record. Regular participation will help you climb the ranks.
            </>
        )
    },
    {
        "title": "How do I invite friends to join  Sevak Army?",
        "content": (
            <>
                You can invite friends by going to <strong>'Invite Friends'</strong> on your dashboard. Enter their email addresses and they will receive an invitation to join  Sevak Army.
            </>
        )
    },
    {
        "title": "Can I earn rewards for referring friends?",
        "content": (
            <>
                Yes,  Sevak Army offers referral rewards. You can earn points or badges when friends you refer register and complete their first task.
            </>
        )
    },
    {
        "title": "What should I do if my friend didn’t receive the invite email?",
        "content": (
            <>
                If your friend didn’t receive the invite email, ask them to check their spam or junk folder. You can also resend the invitation from the <strong>'Invite Friends'</strong> section.
            </>
        )
    },
    {
        "title": "How do I create a group task for my NGO?",
        "content": (
            <>
                If you’re an NGO or group leader, you can create group tasks by going to <strong>'Create Task'</strong> on your dashboard. Select <strong>'Group Task'</strong> and fill in the necessary details.
            </>
        )
    },
    {
        "title": "Can I see who else has joined a task I’m participating in?",
        "content": (
            <>
                Yes, you can see the list of participants in the task details section. Simply click on the task and you’ll find the names of volunteers who have joined.
            </>
        )
    },
    {
        "title": "What is  Sevak Army’s cancellation policy for tasks?",
        "content": (
            <>
                If you need to cancel a task, try to notify the task organiser at least 24 hours in advance. For paid or special tasks, check with the organiser for specific cancellation terms.
            </>
        )
    },
    {
        "title": "Can I reactivate a cancelled task?",
        "content": (
            <>
                Yes, task organisers have the option to reactivate cancelled tasks. If you're the organiser, go to <strong>'My Tasks'</strong>, select the cancelled task and click <strong>'Reactivate'</strong>.
            </>
        )
    },
    {
        "title": "How do I give feedback on tasks?",
        "content": (
            <>
                You can provide feedback on tasks once they’re completed by going to <strong>'My Tasks'</strong> and selecting <strong>'Leave Feedback'</strong>. Your input helps improve future tasks.
            </>
        )
    },
    {
        "title": "Can I edit my feedback after submitting it?",
        "content": (
            <>
                No, feedback cannot be edited once submitted. Make sure your feedback is complete and accurate before submitting it.
            </>
        )
    },
    {
        "title": "Can I control who sees my profile?",
        "content": (
            <>
                Yes, you can control the visibility of your profile by going to <strong>'Profile Settings'</strong> and adjusting your privacy options. You can choose between public, private or custom settings.
            </>
        )
    },
    {
        "title": "What information is visible on a public profile?",
        "content": (
            <>
                On a public profile, other users can see your name, profile picture, badges and volunteering impact. Sensitive details like your email address or contact information are not shared.
            </>
        )
    },
    {
        "title": "How do I hide specific information from my profile?",
        "content": (
            <>
                To hide specific information, go to <strong>'Profile Settings'</strong> <strong>'Privacy'</strong> and select which details you want to make private or visible only to certain groups.
            </>
        )
    },
    {
        "title": "What happens if I encounter inappropriate content?",
        "content": (
            <>
                If you encounter inappropriate content, report it using the <strong>'Report'</strong> button on the task or user's profile. Our team will review the report and take appropriate action.
            </>
        )
    },
    {
        "title": "Can I edit my bio after creating my profile?",
        "content": (
            <>
                Yes, you can edit your bio anytime by going to <strong>'Profile Settings'</strong> and updating the <strong>'Bio'</strong> section. Be sure to save your changes.
            </>
        )
    },
    {
        "title": "Can I reset my leaderboard ranking?",
        "content": (
            <>
                No, leaderboard rankings are based on your volunteering activity. You cannot reset them, but you can improve your ranking by completing more tasks and increasing your impact.
            </>
        )
    },
    {
        "title": "How do I report a bug or technical issue?",
        "content": (
            <>
                If you encounter a bug or technical issue, go to the <strong>'Support'</strong> section and submit a ticket under <strong>'Report a Bug'</strong>. Provide as much detail as possible, including screenshots if available.
            </>
        )
    },
    {
        "title": "How do I clear my browser cache?",
        "content": (
            <>
                To clear your browser cache, go to your browser’s settings, find the <strong>'Clear Browsing Data'</strong> option and select <strong>'Cached Images and Files'</strong>. This can help resolve some technical issues.
            </>
        )
    },
    {
        "title": "Can I use  Sevak Army on multiple devices?",
        "content": (
            <>
                Yes, you can use  Sevak Army on multiple devices. The platform is accessible via desktop, tablet and mobile browsers and your data syncs across all devices.
            </>
        )
    },
    {
        "title": "Can I download  Sevak Army mobile app?",
        "content": (
            <>
                Yes, Sevak Army offers a mobile app available for download on both iOS and Android devices. Check your device’s app store for the latest version.
            </>
        )
    },
    {
        "title": "How do I update  Sevak Army app?",
        "content": (
            <>
                To update  Sevak Army app, go to your app store, search for Sevak Army and click <strong>'Update'</strong>. Make sure you have the latest version for optimal performance.
            </>
        )
    },
    {
        "title": "How do I report issues with the app?",
        "content": (
            <>
                If you encounter issues with the app, you can report them via the <strong>'Support'</strong> section within the app or by submitting a support ticket on the website.
            </>
        )
    },
    {
        "title": "Why isn’t the app working on my device?",
        "content": (
            <>
                If the app isn’t working on your device, ensure that your operating system is up to date and check that you have the latest version of the app installed. You can also try clearing your app cache or reinstalling the app.
            </>
        )
    },
    {
        "title": "Can I use  Sevak Army offline?",
        "content": (
            <>
                No,  Sevak Army requires an internet connection to access features and tasks. However, you can draft messages or task reports offline and upload them when you’re back online.
            </>
        )
    },
    {
        "title": "What should I do if I forget to log my hours?",
        "content": (
            <>
                If you forget to log your hours, you can go back to <strong>'My Tasks'</strong>, find the completed task and manually input the hours worked before submitting for review.
            </>
        )
    },
    {
        "title": "How can I view my volunteer impact report?",
        "content": (
            <>
                You can view your volunteer impact report by going to your dashboard and selecting <strong>'Impact Report'</strong>. This section shows your total hours, tasks completed and achievements.
            </>
        )
    },
    {
        "title": "Can I download or share my impact report?",
        "content": (
            <>
                Yes, you can download or share your impact report as a PDF from your <strong>'Impact Report'</strong> section. This is useful for sharing with employers or adding to your portfolio.
            </>
        )
    },
    {
        "title": "How do I set up text message notifications?",
        "content": (
            <>
                To set up text message notifications, go to <strong>'Account Settings'</strong> <strong>'Notifications'</strong> and enable SMS alerts. You’ll need to verify your mobile number during this process.
            </>
        )
    },
    {
        "title": "Can I unsubscribe from email or SMS notifications?",
        "content": (
            <>
                Yes, you can unsubscribe from email or SMS notifications by going to <strong>'Account Settings'</strong> <strong>'Notifications'</strong> and turning off the relevant options.
            </>
        )
    },
    {
        "title": "What is Sevak Army Ambassador Programme?",
        "content": (
            <>
                Sevak Army Ambassador Programme allows volunteers and influencers to represent the platform, promote its values and earn rewards for their efforts.
            </>
        )
    },
    {
        "title": "How do I apply to become a Sevak Army Ambassador?",
        "content": (
            <>
                To apply for the Ambassador Programme, go to <strong>'Join as Ambassador'</strong> under your dashboard and complete the application form. Successful applicants will be contacted for the next steps.
            </>
        )
    },



];


function FAQPage() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header"} />
            <PageTitle pageTitle={"FAQs"} pagesub={"FAQs"} />
            <>
                <div className='container section-padding'>
                    <h2 className='w-100 text-center'>Find answers to common questions about Sevak Army volunteering.</h2>

                    <section className="wpo-service-single-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12 col-md-12">
                                    <div className="wpo-service-single-wrap">
                                        <div className="wpo-benefits-section">
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <div className="wpo-benefits-item">
                                                        <div className="accordion" id="accordionExample">
                                                            {accordionData.map((item, index) => (
                                                                <div className="accordion-item" key={index}>
                                                                    <h3 className="accordion-header" id={`heading${index}`}>
                                                                        <button
                                                                            className={`accordion-button ${activeAccordion === index ? '' : 'collapsed'}`}
                                                                            type="button"
                                                                            onClick={() => toggleAccordion(index)}
                                                                            aria-expanded={activeAccordion === index ? 'true' : 'false'}
                                                                            aria-controls={`collapse${index}`}
                                                                        >
                                                                            {item.title}
                                                                        </button>
                                                                    </h3>
                                                                    <div
                                                                        id={`collapse${index}`}
                                                                        className={`accordion-collapse collapse ${activeAccordion === index ? 'show' : ''}`}
                                                                        aria-labelledby={`heading${index}`}
                                                                        data-bs-parent="#accordionExample"
                                                                    >
                                                                        <div className="accordion-body">
                                                                            <p>{item.content}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                
            </>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
}

export default FAQPage;