import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MockDataService {

    // Multiple KPIs with colors and icons
    getKPIs(start?: Date, end?: Date): any[] {
        // Example: generate random values depending on the date range // not real
        const multiplier = start && end ? (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) : 1;

        return [
            { label: 'Sales', value: Math.round(1000 * multiplier), color: '#42A5F5', icon: 'pi pi-shopping-cart', delta: Math.round(Math.random() * 20 - 10) },
            { label: 'Revenue', value: Math.round(5000 * multiplier), color: '#66BB6A', icon: 'pi pi-money-bill', delta: Math.round(Math.random() * 20 - 10) },
            { label: 'Customers', value: Math.round(200 * multiplier), color: '#FFA726', icon: 'pi pi-users', delta: Math.round(Math.random() * 20 - 10) }
        ];
    }

    // Colorful charts for multiple datasets
    getChartData(start?: Date, end?: Date) {
        const series = this.getTimeSeries(start, end);

        return {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Sales',
                    data: series.map(d => d.value),
                    fill: false,
                    borderColor: '#42A5F5', // blue
                    backgroundColor: '#42A5F5',
                    tension: 0.4
                },
                {
                    label: 'Active Users',
                    data: series.map(d => d.value),
                    fill: false,
                    borderColor: '#FFA500', // orange
                    backgroundColor: '#FFA500',
                    tension: 0.4
                },
                {
                    label: 'Engagement',
                    data: series.map(d => d.value),
                    fill: false,
                    borderColor: '#28a745', // green
                    backgroundColor: '#28a745',
                    tension: 0.4
                }
            ]
        };
    }

    // Large table with alternating row colors
    getTableData(start?: Date, end?: Date) {
        const data = [
            { id: 1, name: 'John Doe', purchases: 12, country: 'Germany' },
            { id: 2, name: 'Jane Smith', purchases: 9, country: 'USA' },
            { id: 3, name: 'Alex Brown', purchases: 14, country: 'France' },
            { id: 4, name: 'Maria Garcia', purchases: 5, country: 'Spain' },
            { id: 5, name: 'Chen Li', purchases: 8, country: 'China' },
            { id: 6, name: 'Fatima Khan', purchases: 11, country: 'Pakistan' },
            { id: 7, name: 'Oliver Jones', purchases: 15, country: 'UK' },
            { id: 8, name: 'Sophia Martinez', purchases: 7, country: 'Mexico' },
            { id: 9, name: 'Liam Wilson', purchases: 6, country: 'Canada' },
            { id: 10, name: 'Emma Thompson', purchases: 13, country: 'Australia' }
        ];

        return data.map(d => ({ ...d, date: new Date(Date.now() - Math.random() * 60 * 24 * 3600 * 1000).toISOString().slice(0, 10) }))
            .filter(d => (!start || new Date(d.date) >= start) && (!end || new Date(d.date) <= end));
    }

    getTimeSeries(start?: Date, end?: Date) {
        const series: { date: string; value: number }[] = [];
        const now = end ?? new Date();
        const days = 30; // default last 30 days

        for (let i = days - 1; i >= 0; i--) {
            const d = new Date(now);
            d.setDate(now.getDate() - i);
            if (!start || d >= start) {
                series.push({ date: d.toISOString().slice(0, 10), value: Math.floor(Math.random() * 200 + 50) });
            }
        }
        return series;
    }

}
