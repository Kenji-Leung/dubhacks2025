import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const SchedulePage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <section className="flex flex-col gap-6 lg:flex-row">
          <div
            className={`relative flex flex-shrink-0 items-start transition-all duration-300 ${isCollapsed ? 'w-16 self-start' : 'w-full lg:w-80'}`}
          >
            <div className="relative flex-1 overflow-hidden">
              <aside
                id="event-waitlist-panel"
                className={`flex w-full flex-col rounded-2xl bg-gray-200 p-6 transition-all duration-300 lg:min-h-[680px] ${
                  isCollapsed ? '-translate-x-full opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'
                }`}
                aria-hidden={isCollapsed}
              >
                <h2 className="text-lg font-semibold text-gray-800">Events Waitlist:</h2>
                <div className="mt-6 flex flex-1 flex-col gap-4">
                  {[...Array(6)].map((_, index) => (
                    <div
                      key={index}
                      className="h-20 rounded-lg bg-gray-300/60"
                      aria-label="Empty event slot"
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-6 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-100"
                >
                  Fill Schedule
                </button>
              </aside>
            </div>
            <button
              type="button"
              aria-controls="event-waitlist-panel"
              aria-expanded={!isCollapsed}
              aria-label={isCollapsed ? 'Expand event waitlist' : 'Collapse event waitlist'}
              onClick={() => setIsCollapsed((prev) => !prev)}
              className="ml-3 mt-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-300 text-lg font-semibold text-gray-800 shadow transition hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              {isCollapsed ? '>' : '<'}
            </button>
          </div>

          <main className="flex flex-1 flex-col gap-6">
            <header className="text-center">
              <h1 className="text-4xl font-bold text-gray-900">Schedule</h1>
            </header>

            <div className="flex flex-1 flex-col rounded-3xl bg-gray-200 p-6">
              <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {days.map((day) => (
                  <section
                    key={day}
                    className="flex flex-col rounded-2xl bg-white p-4 shadow-sm"
                    aria-labelledby={`${day.toLowerCase()}-label`}
                  >
                    <h2
                      id={`${day.toLowerCase()}-label`}
                      className="text-sm font-semibold uppercase tracking-wide text-gray-700"
                    >
                      {day}
                    </h2>
                    <div className="mt-3 flex flex-1 rounded-xl border border-dashed border-gray-300 bg-gray-50" />
                  </section>
                ))}
              </div>
            </div>
          </main>
        </section>

        <div className="flex justify-center">
          <Link to="/events/new">
            <button
              type="button"
              className="w-full max-w-md rounded-full bg-gray-300 px-6 py-4 text-base font-semibold text-gray-900 transition hover:bg-gray-400"
            >
              Create New Schedule
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
