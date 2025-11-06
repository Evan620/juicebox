import Link from 'next/link'

export const metadata = {
  title: 'Credits System - Juicebox Documentation',
  description: 'Understand how contact and export credits work in Juicebox.',
}

export default function Credits() {
  return (
    <div className="prose dark:prose-invert">
      <h1>All About Credits</h1>
      
      <blockquote className="text-xl">
        Details on Contact and Export Credits.
      </blockquote>

      <h2>Introduction</h2>
      <p>
        As a premium Juicebox user, you have access to two different sets of credits:
      </p>

      <ul>
        <li>
          <strong>Contact Credits</strong> are used to get a profile's contact information. On the starter plan, you can access personal and professional email addresses. Additionally, on the growth and business plans, you can also access phone numbers.
        </li>
        <li>
          <strong>Export Credits</strong> are used to export profiles. On the starter and growth plans, you can export profiles as a CSV file. On the business plan, you can also export profiles to your CRM or ATS.
        </li>
      </ul>

      <h2>Credits: Overview</h2>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full">
          <thead>
            <tr>
              <th></th>
              <th>Starter Plan</th>
              <th>Growth Plan</th>
              <th>Business Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Contact Credits</strong></td>
              <td>250/month</td>
              <td>1,000/seat/month</td>
              <td>Custom</td>
            </tr>
            <tr>
              <td>Personal Email</td>
              <td>☑️</td>
              <td>☑️</td>
              <td>☑️</td>
            </tr>
            <tr>
              <td>Professional Email</td>
              <td>☑️</td>
              <td>☑️</td>
              <td>☑️</td>
            </tr>
            <tr>
              <td>Phone Numbers</td>
              <td>-</td>
              <td>☑️</td>
              <td>☑️</td>
            </tr>
            <tr>
              <td><strong>Export Credits</strong></td>
              <td>250/seat/month</td>
              <td>1,000/seat/month</td>
              <td>Custom</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        For details on the number of contact and export credits available in your plan, please select the "my plan" tab. On the monthly plan, credits <strong>do not roll over</strong>. On the annual plan, the full year quantity of credits are granted upfront.
      </p>

      <div className="callout callout-info">
        <p className="mb-0">
          <strong>💡 Important:</strong> On Juicebox, one contact credit gives you access to all contact information for a profile. So you only have to use one credit to get a contact's personal email, professional email, and phone number.
        </p>
      </div>

      <h2>Using Contact Credits</h2>
      <p>
        Contact credits can be used in three ways:
      </p>

      <h3>1. Reveal Email & Phone</h3>
      <p>
        This method will provide you with all contact information for a specific profile.
      </p>

      <h3>2. Export with Contact Info</h3>
      <p>
        When exporting profiles, you can choose whether to export with contact information or without contact information. If you choose to export with contact information, Contact Credits are only used when contact information is successfully found.
      </p>

      <h3>3. Drafting a Sequence</h3>
      <p>
        When adding contacts to an email sequence in the profile view or via bulk selection, clicking "Add to sequence" reveals the contact information of these profiles, and you will be charged one Contact Credit for every <em>new</em> contact information revealed.
      </p>

      <div className="callout callout-success">
        <p className="mb-0">
          <strong>💡 Note:</strong> You will never be double-charged for contact credits. For example, if you use a credit to get contact information via the "Reveal Email & Phone" button, and then export the same profile with contact information, you will only use one (1) credit total.
        </p>
      </div>

      <h2>Using Export Credits</h2>
      <p>
        Export credits give you access to detailed profile information in a scalable format. For more details on what export options exist, please see <Link href="/exports">Export Profiles</Link>.
      </p>

      <p>
        Each exported profile uses one (1) export credit. When you export 50 profiles, you will use 50 export credits. If you choose to include contact info in the exports, it will also use a contact credit (please see the above section for more details on contact credits).
      </p>

      <h2>Using Contact & Export Credits Simultaneously</h2>
      <p>
        When exporting profiles and selecting "Include Contact Information" you will utilize both contact and export credits simultaneously.
      </p>

      <h3>Example 1: Exporting 50 profiles, 20 with contact information</h3>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full">
          <thead>
            <tr>
              <th></th>
              <th>Contact Credits</th>
              <th>Export Credits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Starting Credits</td>
              <td>100</td>
              <td>450</td>
            </tr>
            <tr>
              <td><strong>Credits Used</strong></td>
              <td><strong>20</strong></td>
              <td><strong>50</strong></td>
            </tr>
            <tr>
              <td>Remaining Credits</td>
              <td>80</td>
              <td>400</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Example 2: Same export, but contact info already revealed</h3>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full">
          <thead>
            <tr>
              <th></th>
              <th>Contact Credits</th>
              <th>Export Credits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Starting Credits</td>
              <td>100</td>
              <td>450</td>
            </tr>
            <tr>
              <td><strong>Credits Used</strong></td>
              <td><strong>0</strong></td>
              <td><strong>50</strong></td>
            </tr>
            <tr>
              <td>Remaining Credits</td>
              <td>100</td>
              <td>400</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="italic">
        In this example, no contact credits were used, as you already previously got the profiles' contact information. Only export credits were used.
      </p>

      <h2>Monitoring Credit Usage</h2>
      <p>
        To view your remaining Contact and Export Credits, open the "Your Account" tab by selecting your profile icon in the bottom left. There, you can see your remaining contact and export credits. If you want to learn more about your detailed credit usage, usage logs of contact usage data including the timestamp and the number of credits used are available.
      </p>

      <div className="callout callout-warning mt-8">
        <p className="mb-0">
          <strong>⚠️ Running low on credits?</strong> You can request additional credits or upgrade your plan from the billing section in your account settings.
        </p>
      </div>

      <h2>Related Topics</h2>
      <ul>
        <li><Link href="/exports">Export Profiles</Link></li>
        <li><Link href="/sequences">Email Sequences</Link></li>
        <li><Link href="/account">Account Management</Link></li>
      </ul>
    </div>
  )
}

