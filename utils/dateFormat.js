module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY, hh:mm AM/PM
      return new Date(date).toLocaleDateString("en-US", { 
          year: 'numeric', 
          month: '2-digit', 
          day: '2-digit', 
          hour: '2-digit', 
          minute: '2-digit', 
          hour12: true 
      });
    },
};