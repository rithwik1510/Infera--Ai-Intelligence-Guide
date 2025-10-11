"use client";

import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import type { ComparisonConfig, ModelProfile } from "@ai-helper/types";

interface ComparisonChartProps {
  config: ComparisonConfig;
  models: ModelProfile[];
}

const COLORS = ["#2563EB", "#F59E0B", "#8B5CF6", "#10B981"];

export function ComparisonChart({ config, models }: ComparisonChartProps) {
  const data = config.benchmarks.map((benchmark) => {
    const benchmarkData: { [key: string]: string | number } = { benchmark: benchmark.name };
    models.forEach((model) => {
      const score = model.benchmarks.find((b) => b.benchmarkId === benchmark.id)?.score || 0;
      benchmarkData[model.id] = score;
    });
    return benchmarkData;
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="benchmark" />
        <Legend />
        {models.map((model, index) => (
          <Radar
            key={model.id}
            dataKey={model.id}
            stroke={COLORS[index % COLORS.length]}
            fill={COLORS[index % COLORS.length]}
            fillOpacity={0.6}
            name={model.name}
          />
        ))}
      </RadarChart>
    </ResponsiveContainer>
  );
}

