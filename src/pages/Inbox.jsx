import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';

function Inbox(props) {
    const taskList = [
        {
          id: '001',
          title: 'Complete Research Paper',
          description:
            'Conduct thorough research and compile findings into a comprehensive research paper.',
          due_date: '2024-03-20',
          priority: 'High',
        },
        {
          id: '002',
          title: 'Prepare Presentation',
          description:
            'Create a compelling presentation with key points and visuals for the upcoming client meeting.',
          due_date: '2024-03-10',
          priority: 'Medium',
        },
        {
          id: '003',
          title: 'Review Codebase',
          description:
            'Conduct a code review to identify and fix any issues in the current software codebase.',
          due_date: '2024-03-05',
          priority: 'High',
        },
        {
          id: '004',
          title: 'Organize Team Building Event',
          description:
            'Plan and coordinate a team-building event to foster better collaboration and morale.',
          due_date: '2024-03-15',
          priority: 'Medium',
        },
        {
          id: '005',
          title: 'Update Social Media Content',
          description:
            'Refresh social media content, engage with the audience, and monitor trends for improvement.',
          due_date: '2024-03-08',
          priority: 'Low',
        },
        {
          id: '006',
          title: 'Conduct Training Session',
          description:
            'Prepare and conduct a training session for team members on the new project management tool.',
          due_date: '2024-03-12',
          priority: 'Medium',
        },
        {
          id: '007',
          title: 'Implement Security Updates',
          description:
            "Apply the latest security updates to ensure the system's protection against vulnerabilities.",
          due_date: '2024-03-03',
          priority: 'High',
        },
        {
          id: '008',
          title: 'Optimize Website Performance',
          description:
            'Identify and implement optimizations to enhance the speed and performance of the company website.',
          due_date: '2024-03-18',
          priority: 'Medium',
        },
        {
          id: '009',
          title: 'Develop Marketing Strategy',
          description:
            'Create a comprehensive marketing strategy outlining key initiatives for the upcoming quarter.',
          due_date: '2024-03-25',
          priority: 'High',
        },
        {
          id: '010',
          title: 'Coordinate Team Building Workshop',
          description:
            'Plan and execute a team-building workshop to strengthen collaboration and teamwork.',
          due_date: '2024-03-22',
          priority: 'Medium',
        },
      ];
      
    return (
      <div>
        <div className="py-3">
          <h2 className='text-2xl font-semibold'>Today</h2>
          <div className='mt-2'>
            <div className='flex items-center ms-2'><IoCheckmarkSharp /> <span className='ms-2'>3 Task</span></div>
          </div>
        </div>
        <div className="list_tab mt-4 ms-3">
            {taskList.map((task, index) => (
              <div class="tab_item flex mt-2 pb-4 border-b-2">
                <div class="flex items-center h-5">
                  <input id={task.id}
                    aria-describedby="helper-radio-text"
                    type="radio"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-200 focus:ring-blue-500 focus:ring-2"
                  />
                </div>
                <div class="ms-3 text-sm">
                  <label for="helper-radio" class=" text-gray-900 text-base">
                   {task.title}
                  </label>
                  <p id="helper-radio-text" class=" mt-1 font-normal text-[#a0aec0]"
                  >
                    {task.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
}

export default Inbox;