interface RatingEntity {
  rating: string | null;
  reviewCount: string | null;
}

interface CuisineEntity {
  cuisine_name: string;
  cuisine_id: number;
}

// export const RatingArrayCreate = (diningRatings: any, deliveryRatings: any) => {
//   const rating = new Map();
//   rating.set('Zomato', []);
//   rating.set('Swiggy', []);
//   rating.set('Dineout', []);
//   rating.set('Eazydiner', []);
//   Object.entries(diningRatings).map(([k, v]) => {
//     const r = v as RatingEntity;
//     let vendor = '';
//     if (k.at(0) === 'z') {
//       vendor = 'Zomato';
//     } else if (k.at(0) === 's') {
//       vendor = 'Swiggy';
//     } else if (k.at(0) === 'd') {
//       vendor = 'Dineout';
//     } else {
//       vendor = 'Eazydiner';
//     }
//     rating.get(vendor).push({ type: 'Dining', value: r });
//   });
//   Object.entries(deliveryRatings).map(([k, v]) => {
//     const r = v as RatingEntity;
//     let vendor = '';
//     if (k.at(0) === 'z') {
//       vendor = 'Zomato';
//     } else if (k.at(0) === 's') {
//       vendor = 'Swiggy';
//     } else if (k.at(0) === 'd') {
//       vendor = 'Dineout';
//     } else {
//       vendor = 'Eazydiner';
//     }
//     rating.get(vendor).push({ type: 'Delivery', value: r });
//   });
//   return rating;
// };

export const RatingArrayCreate = (ratings: any) => {
  const rating = new Array<any>();
  Object.entries(ratings).forEach(([k, v]) => {
    const r = {
      vendor: '',
      rating: (v as RatingEntity).rating,
      count: (v as RatingEntity).reviewCount,
    };
    if (r.rating || r.count) {
      if (k.at(0) === 'z') {
        r.vendor = 'Zomato';
      } else if (k.at(0) === 's') {
        r.vendor = 'Swiggy';
      } else if (k.at(0) === 'd') {
        r.vendor = 'Dineout';
      } else {
        r.vendor = 'Eazydiner';
      }
      rating.push(r);
    }
  });
  return rating;
};

export const RatingAggregation = (ratings: any, aggregationType = 'rating') => {
  let rating = 0;
  let total = 0;
  let reviews = 0;
  Object.entries(ratings).forEach(([k, v]) => {
    const r = v as RatingEntity;
    if (r.rating != null) {
      rating +=
        parseFloat(r.rating) * parseFloat(r.reviewCount ? r.reviewCount : '1');
      total += 5 * parseInt(r.reviewCount ? r.reviewCount : '1');
      reviews += parseFloat(r.reviewCount || '0');
    }
  });
  if (aggregationType !== 'rating') {
    return reviews === 0 ? '-' : reviews.toString();
  } else {
    if (rating === 0) {
      return '-';
    } else {
      return ((rating / total) * 5).toFixed(1);
    }
  }
};

export const CreateCuisineString = (c: unknown[]) => {
  const cuisines = c as CuisineEntity[];
  return cuisines
    .map((cuisine: CuisineEntity) => {
      return cuisine.cuisine_name;
    })
    .slice(0, 4)
    .join(', ');
};

export const GetRatingColor = (rating: number | string): string => {
  let color: string;
  if (rating === '-') {
    color = 'lightgrey';
  } else if (rating <= 1) {
    color = '#C21010';
  } else if (rating <= 2) {
    color = '#E64848';
  } else if (rating <= 3) {
    color = '#FFC54D';
  } else if (rating <= 4) {
    color = '#5BB318';
  } else {
    color = '#2B7A0B';
  }
  return color;
};

export const GetVendorColor = (vendor: string) => {
  if (vendor === 'Zomato') {
    return '#E33745';
  }
  return 'hello';
};

export const GetVendorImage = (vendor: string) => {
  const v = vendor.toLowerCase();
  switch (v) {
    case 'zomato':
    case 'swiggy':
    case 'dineout':
    case 'eazydiner':
  }
};
