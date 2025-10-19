import React from 'react';
import { Link } from 'react-router-dom';

function EventFormPage() {
  const addNewEvent = () => {};

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center">
        <div className="w-full rounded-3xl bg-white px-6 py-10 shadow-sm sm:px-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Tell Us Your Event Info
            </h1>
            <Link
              to="/events/url-workshop"
              className="w-full max-w-xs rounded-full bg-gray-200 px-6 py-3 text-base font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Use URL
            </Link>
          </div>

          <form className="mt-8 rounded-3xl bg-gray-100 px-5 py-6 sm:px-8">
            <div className="flex flex-col gap-5">
              <label className="flex flex-col gap-2 text-left">
                <span className="text-sm font-semibold text-gray-800">Event Title</span>
                <input
                  type="text"
                  name="eventTitle"
                  placeholder="Enter event title"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </label>

              <div className="flex flex-col gap-4 md:flex-row md:items-start">
                <label className="flex w-full flex-col gap-2 text-left md:w-1/2">
                  <span className="text-sm font-semibold text-gray-800">Date</span>
                  <input
                    type="date"
                    name="eventDate"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </label>

                <div className="flex w-full flex-col gap-4 text-left md:w-1/2">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-700">
                      Start Time
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <input
                        type="time"
                        name="eventStartTime"
                        className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 md:w-32"
                      />
                      <select
                        name="eventStartPeriod"
                        aria-label="Start time period"
                        className="w-20 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        defaultValue="AM"
                      >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </select>
                    </div>
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-700">
                      End Time
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <input
                        type="time"
                        name="eventEndTime"
                        className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 md:w-32"
                      />
                      <select
                        name="eventEndPeriod"
                        aria-label="End time period"
                        className="w-20 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        defaultValue="PM"
                      >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </select>
                    </div>
                  </label>
                </div>
              </div>

              <label className="flex flex-col gap-2 text-left">
                <span className="text-sm font-semibold text-gray-800">Address</span>
                <input
                  type="text"
                  name="eventAddress"
                  placeholder="Enter event address"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </label>

              <label className="flex flex-col gap-2 text-left">
                <span className="text-sm font-semibold text-gray-800">Description (optional)</span>
                <textarea
                  name="eventDescription"
                  rows="4"
                  placeholder="Share a brief description"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </label>
            </div>
          </form>

          <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={addNewEvent}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-2xl font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              aria-label="Add another event"
            >
              +
            </button>
            <Link
              to="/"
              className="flex w-full max-w-[120px] items-center justify-center self-end rounded-xl bg-gray-200 px-4 py-3 text-sm font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 sm:self-auto"
            >
              Finish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventFormPage;
