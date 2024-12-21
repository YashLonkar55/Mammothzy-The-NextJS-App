"use client";

export default function FormSubmittedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-[510px] h-[211px] bg-white rounded-2xl shadow-lg relative p-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Success icon with gray circle background */}
          <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center">
            <div 
              className="w-[70px] h-[70px] rounded-full bg-green-500 flex items-center justify-center relative"
              style={{
                boxShadow: '0 4px 12px rgba(0, 200, 83, 0.4)'
              }}
            >
              <svg 
                className="w-10 h-10 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0, 200, 83, 0.2))'
                }}
              >
                <path 
                  strokeLinecap="square" 
                //   strokeLinejoin="square"
                  strokeWidth={4} 
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Text content directly below the icon */}
          <h2 className="text-2xl font-bold text-gray-900">
            Form Submitted
          </h2>
        </div>
      </div>
    </div>
  );
}

