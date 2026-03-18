import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Component/Table",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Role</th>
          <th>Location</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>Sarah Johnson</td>
          <td>Engineering</td>
          <td>Software Engineer</td>
          <td>New York</td>
          <td>s.johnson@continental.com</td>
        </tr>
        <tr>
          <td>002</td>
          <td>Michael Smith</td>
          <td>Finance</td>
          <td>Accountant</td>
          <td>London</td>
          <td>m.smith@continental.com </td>
        </tr>
        <tr>
          <td>003</td>
          <td>Linda Zhao</td>
          <td>Marketing</td>
          <td>Marketing Manager</td>
          <td>Singapore</td>
          <td>l.zhao@continental.com</td>
        </tr>
        <tr>
          <td>004</td>
          <td>David Kim</td>
          <td>HR</td>
          <td>HR Specialist</td>
          <td>Seoul</td>
          <td>d.kim@continental.com</td>
        </tr>
        <tr>
          <td>005</td>
          <td>Alice Brown</td>
          <td>Engineering</td>
          <td>DevOps Engineer</td>
          <td>Berlin</td>
          <td>a.brown@continental.com</td>
        </tr>
        <tr>
          <td>006</td>
          <td>John Miller</td>
          <td>Legal</td>
          <td>Legal Advisor</td>
          <td>Toronto</td>
          <td>j.miller@continental.com</td>
        </tr>
        <tr>
          <td>007</td>
          <td>Emily Davis</td>
          <td>Sales</td>
          <td>Sales Executive</td>
          <td>Dubai</td>
          <td>e.davis@continental.com</td>
        </tr>
        <tr>
          <td>008</td>
          <td>Robert Lee</td>
          <td>Engineering</td>
          <td>Systems Architect</td>
          <td>San Francisco</td>
          <td>r.lee@continental.com</td>
        </tr>
        <tr>
          <td>009</td>
          <td>Maria Gonzalez</td>
          <td>Support</td>
          <td>Customer Support Rep</td>
          <td>Mexico City</td>
          <td>m.gonzalez@continental.com</td>
        </tr>
        <tr>
          <td>010</td>
          <td>James Walker</td>
          <td>Research</td>
          <td>Data Scientist</td>
          <td>Zurich</td>
          <td>j.walker@continental.com</td>
        </tr>
      </tbody>
    </table>
  ),
};
